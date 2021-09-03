const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post("/tasks", (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

module.exports = router