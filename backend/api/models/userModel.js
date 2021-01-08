const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    nama: {
        type: String,
        default: 'nama kmu',
    },
    email: {
        type: String,
        default: 'email@gmail.com',
    },
    hp: {
        type: String,
        default: 'no hp',
    },
    alamat: {
        type: String,
        default: 'jkt'
    }
})

module.exports = mongoose.model("User", UserSchema);