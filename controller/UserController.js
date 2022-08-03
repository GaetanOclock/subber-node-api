const User = require('../model/User');
const Video = require('../model/Video');

const updateOrCreate = async req => {
    let user = null;
    if (!req.params.id) {
        user = new User();
    } else {
        user = await User.findByPk(req.params.id);
    }

    user.name = req.body.name;
    await user.save();
    return user;
}

module.exports = {
    list: async (req, res) => {
        const allUsers = await User.findAll();
        res.send(allUsers);
    },
    show: async (req, res) => {
        const user = await User.findByPk(req.params.id);
        res.send(user);
    },
    listVideos: async (req, res) => {
        const videos = await Video.findAll({where: {user_id: req.params.id}});
        res.send(videos);
    },
    create: async (req, res) => {
        const user = await updateOrCreate(req);
        res.send(user);
    },
    update: async (req, res) => {
        const user = await updateOrCreate(req);
        res.send(user);
    },
    delete: async (req, res) => {
        await User.destroy({where: {id: req.params.id}});
        res.send({
            destroyed: req.params.id
        });
    }
};