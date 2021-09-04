const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/users', async (req, res) => {
    const user = new User(req.body)   
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
}); 

router.get('/users', async (req, res) => {    
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }  
})

router.get('/users/:id', async (req, res)=> {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(500).send()
    }
})


module.exports = router
