const Video = require('../model/Video');
const Original = require('../model/Original');

const updateOrCreate = async req => {
    let video = null;
    if (!req.params.id) {
        video = new Video();
        video.name = "";
    } else {
        video = await Video.findByPk(req.params.id);
    }

    if (!video.original) {
        const originalToUse = await Original.findByPk(req.body.originalId);
        if (!originalToUse) {
            throw new Error('Not found');
        }
        video.original_id = originalToUse.id;
    }

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
        const createdVideo = await updateOrCreate(req);
        const video = await Video.findByPk(createdVideo.id, {include: Original});
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