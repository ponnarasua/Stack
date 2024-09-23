const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }
});

const project = mongoose.model('project', projectSchema);
module.exports = project;