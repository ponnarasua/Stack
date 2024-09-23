const express = require('express');
const app = express();
const dbConn = require('./config/db.js')
const project = require("./routes/projectRoute.js")
require('dotenv').config();
const port = process.env.PORT || 2005
app.use(express.json())
app.get('/', (req, res) => {
    res.json("Welcome").status(400);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})