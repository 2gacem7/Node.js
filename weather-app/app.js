const request = require ('request')

const url = 'http://api.weatherstack.com/current?access_key=ebb0acdb2116de42d5a6e0be5f150b24&query=37.8267,-122.4233'

request({ url:url}, (error, response)=> {
    const data = JSON.parse(response.body);
    console.log('error', error);
    console.log(data);
})