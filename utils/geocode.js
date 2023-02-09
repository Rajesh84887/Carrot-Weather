const request = require('request')
const geocode = (address,callback)=>{
    const url = 'http://api.positionstack.com/v1/forward?access_key=d79e223fa043ca33c23cd2687f08f194&query='+encodeURIComponent(address)
    request({url: url,json: true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service',null)
        }
        else if(response.body.error){
            callback(response.body.error.message,null)
        }
        else{
            callback(null,{
                latitude:response.body.data[0].latitude,
                longitude:response.body.data[0].longitude,
                location:response.body.data[0].name
            })
        }
        
    })
}
module.exports = geocode