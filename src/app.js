const path=require('path')
const express=require('express')
const hbs=require('hbs')
const { response } = require('express')
const {forecast}=require('./utils/forecast')
const {geocode}=require('./utils/geocode')

const PORT=process.env.PORT || 3000

const app=express()
// -----------define paths-------
const public_dir_path=path.join(__dirname,"..","/public")
const viewPath=path.join(__dirname,"../templates/views")
const partialpath=path.join(__dirname,"../templates/partials")

//------setup handlebars and views
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialpath)

// --------static directory to serve
app.use(express.static(public_dir_path))

app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather app",
        name:"owais"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About",
        name:"owais"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help Section",
        name:"lorem ipsum dorem leirt llasek skekkela;k"
    })
})
app.get('/weather',(req,res)=>{
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

app.get('/help/*',(req,res)=>{
    res.send("Help article not found")
})

app.get('*',(req,res)=>{
    res.send("My 404 page")
})
app.listen(PORT,()=>{
    console.log('server is up at ',PORT)
})