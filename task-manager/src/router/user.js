const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
        res.send(e)
    })
});

router.get('/users/:id', (req, res)=> {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    }).catch((e)=> {
        res.status(500).send()
    })
})

router.get('/users', (req, res) => {
    User.find({}).then((users)=> {
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})


module.exports = router
