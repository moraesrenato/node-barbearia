const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');
const FileController = require('./controller/FileController');
const MulterConfig = require('../multer');
const upload = require('multer')(MulterConfig);

routes.get('/users', UserController.listaItems);
routes.get('/users/:id', UserController.buscaItem);
routes.post('/users', UserController.criaItem);
routes.delete('/users/:id', UserController.deletaItem);
routes.put('/users/:id', UserController.update);
routes.post('/imagem/:id', upload.single('file'), FileController.pathImagem);
routes.get('login', UserController.login);

module.exports = routes;
