const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3b6887a039d9147d5832b3125e8a32fa/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {

    if (error) {
        callback('Unable to connect to weather service.')
    } else if (body.error) {
        callback('Unable to find location.')
    } else {
    callback(undefined, body.daily.data[0].summary + ' It is currently ' + Math.round(body.currently.temperature) + ' degrees out. There is a ' + body.currently.precipProbability * 100 + '% chance of precipitation.')
    }
})
}

module.exports = forecast