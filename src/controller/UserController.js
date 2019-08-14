const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async listaItems(req, res) {
        const { page = 1 } = req.query; //usa desestruturação para buscar o valor da pagina
        const user = await User.paginate({}, { page, limit: 10 });
        return res.json(user);
    },

    async buscaItem(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },

    async criaItem(req, res) {
        const user = await User.create(req.body);
        return res.send(user);
    },

    async deletaItem(req, res) {
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(user);
    },

    async login(req, res) {
        const user = await User.find();
        let arrayLogin = {};

        user.forEach(function (user) {
            if (user.apelido === req.body.apelido || user.senha === req.body.senha) {
                return res.json('FOI');
            } else {
                return res.json('NAO FOI');
            }
        })
    }

}