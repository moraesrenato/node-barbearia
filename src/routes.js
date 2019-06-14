const express = require('express');
const routes = express.Router();
const ProductController = require('./controller/ProductController');

routes.get('/products', ProductController.listaItems);
routes.get('/products/:id', ProductController.buscaItem);
routes.post('/products', ProductController.criaItem);
routes.delete('/products/:id', ProductController.deletaItem);
routes.put('/products/:id', ProductController.update); // ?

module.exports = routes;