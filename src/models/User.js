const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate'); //responsavel pela paginação dos meus produtos

const userSchema = new mongoose.Schema({
    apelido: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    file: {
        type: String //{ type: mongoose.Schema.Types.ObjectId, ref: "File" }
    },
    url: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);