const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
// Path from default views to templates
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title:'Weather app',
        name:'Gacem BA',
    })
}) 

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About me',
        name:'Gacem Ba',

    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message : 'I need a web developer job',
        title : 'Help Us',
        name:'Gacem Ba',

    })
})

app.get('/weather', (req, res) => {
    if (!req.query.adress) {
        return res.send ({
            error : 'You must provide an adress'
        })
    }
    geocode(req.query.adress, (error, { latitude, longitude, location } = {}) => {
        if(error) {
            return res.send({ error })
        } 
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                adress: req.query.adress
            })
        })
    })

    /* res.send({
        forecast: 'It is sunny',
        location: 'Paris',
        adress: req.query.adress
    }) */
})



app.get('/help/*', (req, res) => {
  res.render('404', {
    title : '404',
    errorMessage : 'Help article not found.'
  })
})

app.get('*', (req, res)=> {
    res.render('404', {
        title : '404',
        errorMessage : 'Page not found',
        name : 'Gacem'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!');
})
