const express = require('express'); //importa o express
const mongoose = require('mongoose'); //importa o mongoose que faz conexão com o banco mongodb
const requireDir = require('require-dir'); // faz um require automatico para todos os arquivos da pasta selecionada 
const cors = require('cors');
const path = require('path');

const app = express();
const server = require('http').Server(app);
app.use(cors()); //libera acesso publico, não só localhost// executa a função do express dentro da variavel

app.use(express.urlencoded({ extended: true })); //permite o envio de arquivos
app.use(express.json()); //permite que eu envie dados no formado json para a aplicação e banco
app.use('/imagem', express.static(path.resolve(__dirname, 'public', 'images')));


mongoose.connect('mongodb+srv://Loading:321321321@minhaapi-zcfbl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}); //conecta com o mongodb

requireDir('./src/models');

app.use('/api', require('./src/routes')); //aceita todas os tipos de requisições vindo das rotas

server.listen(process.env.PORT || 3030); //determina qual porta a api vai rodar