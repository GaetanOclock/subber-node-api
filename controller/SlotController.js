const Slot = require('../model/Slot');

const updateOrCreate = async req => {
    let slot = null;
    if (!req.params.id) {
        slot = new Slot();
    } else {
        slot = await Slot.findByPk(req.params.id);
    }

    slot.start = req.body.start;
    slot.duration = req.body.duration;
    await slot.save();
    return slot;
}

module.exports = {
    list: async (req, res) => {
        const allSlots = await Slot.findAll();
        res.send(allSlots);
    },
    show: async (req, res) => {
        const slot = await Slot.findByPk(req.params.id);
        res.send(slot);
    },
    create: async (req, res) => {
        const slot = await updateOrCreate(req);
        res.send(slot);
    },
    update: async (req, res) => {
        const slot = await updateOrCreate(req);
        res.send(slot);
    },
    delete: async (req, res) => {
        await Slot.destroy({where: {id: req.params.id}});
        res.send({
            destroyed: req.params.id
        });
    }
};