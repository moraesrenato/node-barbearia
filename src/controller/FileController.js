const mongoose = require('mongoose');
const File = mongoose.model('File');
const User = mongoose.model('User');

module.exports = {
    async pathImagem(req, res) {
        const user = await User.findById(req.params.id);

        const file = await File.create({
            title: req.title.originalname,
            path: req.title.filename
        });

        user.file.push(file);

        await user.save();

        req.io.sockets.in(box._id).emit('file', file);

        return res.json(file);
    }
}