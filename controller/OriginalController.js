const Original = require('../model/Original');

const updateOrCreate = async req => {
    let original = null;
    if (!req.params.id) {
        original = new Original();
    } else {
        original = await Original.findByPk(req.params.id);
    }

    original.name = req.body.name;
    await original.save();
    return original;
}

module.exports = {
    list: async (req, res) => {
        const allOriginals = await Original.findAll();
        res.send(allOriginals);
    },
    show: async (req, res) => {
        const original = await Original.findByPk(req.params.id);
        res.send(original);
    },
    create: async (req, res) => {
        const original = await updateOrCreate(req);
        res.send(original);
    },
    update: async (req, res) => {
        const original = await updateOrCreate(req);
        res.send(original);
    },
    delete: async (req, res) => {
        await Original.destroy({where: {id: req.params.id}});
        res.send({
            destroyed: req.params.id
        });
    }
};