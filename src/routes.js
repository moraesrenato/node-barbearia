const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');
//const FileController = require('./controller/FileController');
const MulterConfig = require('../multer');
const upload = require('multer')(MulterConfig);

routes.get('/users', UserController.listaItems);
routes.get('/users/:id', UserController.buscaItem);
routes.post('/users', UserController.criaItem);
routes.delete('/users/:id', UserController.deletaItem);
routes.put('/users/:id', UserController.update); // ?

routes.post('/nova-imagem/:id', upload.single('file'), (req, res, next) => {

    //Se houve sucesso no armazenamento
    if (req.file) {
        //FileController.pathImagem();

        //const { filename } = req.file;
        //Vamos imprimir na tela o objeto com os dados do arquivo armazenado
        return res.send(req.file);
    }

    //Se o objeto req.file for undefined, ou seja, não houve sucesso, vamos imprimir um erro!
    return res.send('Houve erro no upload!');


});

module.exports = routes;
