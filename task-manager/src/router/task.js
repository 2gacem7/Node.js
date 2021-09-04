const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

router.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task )=> {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})


module.exports = router