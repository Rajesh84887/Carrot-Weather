const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
// const url = 'http://api.weatherstack.com/current?access_key=a4836c1e35f8106fb519f2ffe70a800c&query=37.8267,-122.4233&units=f'
// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service')
//     }
//     else if(response.body.error){
//         console.log('Unable to find Location');
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0]+
//                 'It is currently '+response.body.current.temperature +
//                 ' degrees out. It feels like '+response.body.current.feelslike+' degrees out')
//     }
// })

// const geocodeurl = 'http://api.positionstack.com/v1/forward?access_key=d79e223fa043ca33c23cd2687f08f194&query=1600 Pennsylvania Ave NW, Washington DC'
// request({url: geocodeurl,json: true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather service');
//     }
//     else if(response.body.error){
//         console.log(response.body.error.message);
//     }
//     else{
//         console.log(response.body.data[0].latitude)
//         console.log(response.body.data[0].longitude)
//     }
    
// })



geocode('1600 Pennsylvania Ave NW, Washington DC',(error,data)=>{
    console.log(error)
    console.log(data);
})
forecast('75','44',(error,data)=>{
    console.log(error)
    console.log(data);
})