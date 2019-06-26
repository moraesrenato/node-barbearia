const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');

routes.get('/users', UserController.listaItems);
routes.get('/users/:id', UserController.buscaItem);
routes.post('/users', UserController.criaItem);
routes.delete('/users/:id', UserController.deletaItem);
routes.put('/users/:id', UserController.update); // ?

module.exports = routes;