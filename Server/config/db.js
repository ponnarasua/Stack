const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL);
const conn = mongoose.connection;
conn.on('connected', () => { console.log('Mongoose connected to DATABASE');})
conn.on('error', (err) => { console.log('Error:', err); })

module.exports = conn;
