const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate'); //responsavel pela paginação dos meus produtos

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    datanasc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

userSchema.plugin(mongoosePaginate);

mongoose.model('User', userSchema);