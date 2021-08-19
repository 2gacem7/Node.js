const request = require ('request')

/* const url = 'http://api.weatherstack.com/current?access_key=ebb0acdb2116de42d5a6e0be5f150b24&query=37.8267,-122.4233&units=f'

request({url:url, json: true}, (error, response)=> {
    if (error){
        console.log('Unable to connect to weather service!');
    } else if (response.body.error){
        console.log('Unable to find location');
    }
    else{
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + 
        " degrees out. It feels like " + response.body.current.feelslike + " degress out.");   
    }
})  */


const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1IjoiMmdhY2VtNyIsImEiOiJja3Nod3Rid3IxeWNlMnZvZGEyZTZ0aDZ4In0.j5tmOeYWtAVrQzSG4Y608Q&limit=1'
request({url:geoURL, json: true}, (error, response)=> {
    if (error){
        console.log('Unable to connect to geocoding service!');
    }else if (response.body.features.length === 0){
        console.log('The location is not found');
    }else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude);
    }
})