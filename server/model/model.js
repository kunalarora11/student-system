const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname : {
        type : String,
        required: true
    },
    lname : {
        type : String,
        required: true
    },
    class : {
        type : String,
        required: true
    },
    subject : {
        type: String,
        required: true
    },
    marks : {
        type : String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;