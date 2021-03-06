const mongoose = require('mongoose');
const File = mongoose.model('File');
const User = mongoose.model('User');

module.exports = {
    async pathImagem(req, res) {
        const user = await User.findById(req.params.id);

        const file = await File.create({
            path: req.file.path,
            title: req.file.filename,
        });

        user.file = file._id;
        user.url = file.url;

        await user.save();

        return res.json(file);
    }
}
