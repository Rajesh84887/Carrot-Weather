const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=a4836c1e35f8106fb519f2ffe70a800c&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'
        request({ url: url, json: true }, (error, response) => {
            if(error){
                callback('Unable to connect to weather service',null)
            }
            else if(response.body.error){
                callback('Unable to find Location',null);
            }
            else{
                callback(null,response.body.current.weather_descriptions[0]+
                        'It is currently '+response.body.current.temperature +
                        ' degrees out. It feels like '+response.body.current.feelslike+' degrees out')
            }
        })
}
module.exports = forecast