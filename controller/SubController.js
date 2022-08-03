const Sub = require('../model/Sub');

const updateOrCreate = async req => {
    let sub = null;
    if (!req.params.id) {
        sub = new Sub();
    } else {
        sub = await Sub.findByPk(req.params.id);
    }

    sub.text = req.body.text;
    await sub.save();
    return sub;
}

module.exports = {
    list: async (req, res) => {
        const allSubs = await Sub.findAll();
        res.send(allSubs);
    },
    show: async (req, res) => {
        const sub = await Sub.findByPk(req.params.id);
        res.send(sub);
    },
    create: async (req, res) => {
        const sub = await updateOrCreate(req);
        res.send(sub);
    },
    update: async (req, res) => {
        const sub = await updateOrCreate(req);
        res.send(sub);
    },
    delete: async (req, res) => {
        await Sub.destroy({where: {id: req.params.id}});
        res.send({
            destroyed: req.params.id
        });
    }
};