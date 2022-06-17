const request = require('request');

const apiUrl = 'http://api.weatherstack.com/current?access_key=7bb58b099a20b6aafc56fcfe7324ad73&query=';

const currentWeather = (location, callback) => {

    const reqProp = {
        method: 'GET',
        url: apiUrl + location,
        json: true
    }

    request(reqProp, function (error, response, body) {

        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        if (error) {
            console.log('Error occured while retrieving weather info');
            console.log('error:', error); // Print the error if one occurred
            callback(error, undefined);
        } else {
            console.log(body.current);
            callback(undefined, body.current);
        }
    });
}

module.exports = {currentWeather}