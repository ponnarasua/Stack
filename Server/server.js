require('dotenv').config();
const express = require('express');
const app = express();
const dbConn = require('./config/db.js')
const project = require("./routes/projectRoute.js")
const port = process.env.PORT;
app.use(express.json())
app.get('/', (req, res) => {
    res.json("Welcome").status(400);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})