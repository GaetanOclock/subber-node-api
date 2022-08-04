const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {OAuth2Client} = require('google-auth-library');
const User = require('../model/User');

const config = require('../config');
const googleClient = new OAuth2Client(config.GOOGLE_CLIENT_ID);

const userService = {
    async makeGoogleAuth(token) {
        const userData = await this.extractGoogleTokenData(token);
console.log(userData);

        if (await this.userExists(userData.email)) {
            const user = await User.findOne({where: {email: userData.email}});
            if (user) {
                return await this.makeSignIn(user);
            } else {
                return await this.createAccount(userData, true);
            }
        } else {
            return false;
        }
    },
    async makeSignIn(user) {
        const accessToken = jwt.sign({ email: user.email }, config.accessTokenSecret);
        return {
            token: accessToken,
            user: {
                email: user.email,
                displayName: user.displayName
            }
        };
    },
    async createAccount(userData, authAfterCreated = false) {
        const user = new User();
        user.email = userData.email;
        user.displayName = userData.given_name;
        user.password = bcrypt.hash(userData.sub, bcrypt.genSaltSync(10));
        await user.save();

        if(authAfterCreated) {
            return await this.makeSignIn(user);
        }

        return user;
    },
    async extractGoogleTokenData(token) {
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: config.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        
        return payload;
    },
    async userExists(email) {
        return !!User.findOne({where: {email}});
    }
}

module.exports = userService;