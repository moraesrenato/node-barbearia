const mongoose = require('mongoose');

const File = new mongoose.Schema(
    {
        path: {
            type: String,
        },
        title: {
            type: String,
        }
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

File.virtual('url').get(function () {
    const url = process.env.URL || 'http://localhost:3030'
    return `${url}/imagem/${encodeURIComponent(this.title)}`;
});

module.exports = mongoose.model('File', File);