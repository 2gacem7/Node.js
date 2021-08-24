const path = require('path')
const express = require('express')

const app = express()

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine','hbs')

app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title:'Weather app',
        name:'Gacem BA'
    })
}) 

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About me',
        name:'Gacem Ba'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message : 'I need a web developer job'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast : 32,
        location : 'Paris'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!');
})
