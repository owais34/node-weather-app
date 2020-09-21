const request = require('request');

const baseurl='http://api.weatherstack.com/'
const apikey='70d96900dd6620fe1eb97ad0c5f320c9'

const forecast=(latitude,longitude,callback)=>{
    request.get(`${baseurl}current?access_key=${apikey}&query=${latitude},${longitude}`,(error,response)=>{
    if(error)
    {
        callback("Unable to connect to service",undefined)
    }
    else if(response.body.error)
    {
        callback("Unable to find location",undefined)
    }
    else
    {
    const data=JSON.parse(response.body)
    let desc=''
    if(data.current.weather_descriptions)
    {data.current.weather_descriptions.map(des=>{
        desc=desc.concat(' '+des)
    
    })}
     callback(undefined,{
         description:desc,
         temperature:data.current.temperature,
         wind_speed:data.current.wind_speed,
         precipitation:data.current.precip,
         icon:data.current.weather_icon[0]
     })
    }
    
})
}

module.exports={
    forecast:forecast
}