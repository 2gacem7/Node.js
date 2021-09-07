const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const db = require('./src/db/connectionDb');
const userRoute = require('./src/router/user');
const taskRoute = require('./src/router/task')

app.get('/', (req, res) => {
    res.send('is connected...')
})

db();

app.use(cors());
app.use(userRoute, taskRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


