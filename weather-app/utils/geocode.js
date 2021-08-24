const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiMmdhY2VtNyIsImEiOiJja3Nod3Rid3IxeWNlMnZvZGEyZTZ0aDZ4In0.j5tmOeYWtAVrQzSG4Y608Q&limit=1'
    request({url, json:true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to geocoding service!', undefined)
        } else if (body.features.length === 0){
            callback('The location is not found', undefined)
        } else {
            callback (undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode