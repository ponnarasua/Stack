const express = require('express');
const router = express.Router();
const project = require('../models/projectModel');

router.get('/all', async (req, res) => {
    try {
        const fetchedproject = await project.find();
        res.json(fetchedproject).status(200);
    } catch (error) {
        res.json(error).status(200);
    }
});

router.post('/add', async (req, res) => {
    try {
        const newproject = await new project(req.body);
        const { title, desc } = newprojectdata
        if(!title || desc){
            res.json({ message: "Title & Desc Required" }).status(500)
        }
        const savedata = await newprojectdata.save()
        res.json(savedata).status(201);
    } catch (error) {
        res.json(error).status(500);
    }
})