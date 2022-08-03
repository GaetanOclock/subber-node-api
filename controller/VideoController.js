const Video = require('../model/Video');
const Original = require('../model/Original');

const updateOrCreate = async req => {
    let video = null;
    if (!req.params.id) {
        video = new Video();
    } else {
        video = await Video.findByPk(req.params.id);
    }

    video.name = req.body.name;
    await video.save();
    return video;
}

module.exports = {
    list: async (req, res) => {
        const allVideos = await Video.findAll({include: Original});
        res.send(allVideos);
    },
    show: async (req, res) => {
        const video = await Video.findByPk(req.params.id, {include: Original});
        res.send(video);
    },
    create: async (req, res) => {
        const video = await updateOrCreate(req);
        res.send(video);
    },
    update: async (req, res) => {
        const video = await updateOrCreate(req);
        res.send(video);
    },
    delete: async (req, res) => {
        await Video.destroy({where: {id: req.params.id}});
        res.send({
            destroyed: req.params.id
        });
    }
};