const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async listaItems(req, res) {
        const { page = 1 } = req.query; //usa desestruturação para buscar o valor da pagina
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products);
    },

    async buscaItem(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async criaItem(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async deletaItem(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    }
}