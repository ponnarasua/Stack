const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mernproject:sunder@project.704dh.mongodb.net/project?retryWrites=true&w=majority&appName=project");

const conn = mongoose.connection;
conn.on('connected', () => { console.log('Mongoose connected to DATABASE');})
conn.on('error', (err) => { console.log('Error:', err); })

module.exports = conn;