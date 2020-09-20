const request=require('request')

const baseurl2='https://api.mapbox.com/geocoding/v5/mapbox.places/'
const key2='pk.eyJ1Ijoib3dhaXMzNCIsImEiOiJja2Y2bXYyZHgwYm51MnFvM3A0cXgzdDJxIn0.QNsGXafLmUSOGKawUDI1vA'


const geocode=(address,callback)=>{
    request.get(`${baseurl2}${encodeURIComponent(address)}.json?access_token=${key2}&&limit=1`,(error,response)=>{
    if(error)
    {
        callback('error: Unable to connect to service',undefined)
    }
    else
    {
        const data=JSON.parse(response.body)
        if(data.features.length!=0)
        {
            callback(undefined,{
                latitude:data.features[0].center[1],
                longitude:data.features[0].center[0],
                location:data.features[0].place_name
            })
        }
        else
        {callback('Unable to find address',undefined)}
    }
    })
}

module.exports={
    geocode:geocode
}