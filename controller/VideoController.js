const Video = require('../model/Video');
const Original = require('../model/Original');
const Slot = require('../model/Slot');
const Sub = require('../model/Sub');

const updateOrCreate = async req => {
    let video = null;
    if (!req.params.id) {
        video = new Video();
        video.name = "";

        const originalToUse = await Original.findByPk(req.body.originalId, {include: Slot});
        console.log(originalToUse);
        if (!originalToUse) {
            throw new Error('Not found');
        }
        video.original_id = originalToUse.id;
        await video.save();
        originalToUse.Slots.forEach(async slot => {
            const newSub = new Sub();
            newSub.video_id = video.id;
            newSub.user_id = 1;
            newSub.slot_id = slot.id;
            await newSub.save();
        });
        
        
    } else {
        video = await Video.findByPk(req.params.id);
        video.name = req.body.name;
        await video.save();
    }

    return video;
}

module.exports = {
    list: async (req, res) => {
        const allVideos = await Video.findAll({include: Original});
        res.send(allVideos);
    },
    show: async (req, res) => {
        const video = await Video.findByPk(req.params.id, {include: Sub});
        const original = await Original.findByPk(video.original_id, {include: Slot});
        res.send({video, original});
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