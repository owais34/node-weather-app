const path=require('path')
const express=require('express')
const cors=require('cors')
const { response } = require('express')
const {forecast}=require('./utils/forecast')
const {geocode}=require('./utils/geocode')

const PORT=process.env.PORT || 5000

const app=express()
// -----------define paths-------
const public_dir_path=path.join(__dirname,"build")



// --------static directory to serve
app.use(express.static(public_dir_path))

app.get('/',cors(),(req,res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/weather',cors(),(req,res)=>{
    if(!req.query.address)
    {
        res.send({
            error : "There is problem"
        })
        return
    }
    geocode(req.query.address,(error,location_data)=>{
        if(error)
        {
           return res.send({error})
        }
       
        forecast(location_data.latitude,location_data.longitude,(error,forecast_data)=>{
            if(error)
            {
                return res.send({error})
            }
            res.send({
                location:location_data.location,
                forecast:forecast_data
            })
        })
       
    })
})

app.get('*',(req,res)=>{
    res.send("My 404 page")
})
app.listen(PORT,()=>{
    console.log('server is up at ',PORT)
})