const mongoose = require('mongoose');

const File = new mongoose.Schema(
    {
        path: {
            type: String,
        },
        title: {
            type: String,
        }
    }
)

module.exports = mongoose.model('File', File);