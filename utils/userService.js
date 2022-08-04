const {OAuth2Client} = require('google-auth-library');
const config = require('../config');
const googleClient = new OAuth2Client(config.GOOGLE_CLIENT_ID);

const userService = {
    async extractGoogleTokenData(token) {
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: config.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        
        return payload;
    }
}

module.exports = userService;