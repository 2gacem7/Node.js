const express = require('express');
const router = express.Router();
const User = require('../models/user')

const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post("/users", (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

module.exports = router
