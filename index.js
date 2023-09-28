const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const path = require('path')
const fs = require('fs')
const gm = require('gm')
const fileUpload = require('express-fileupload')
// settings 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.static('htmls'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())
app.set('port', port)

class User{
    constructor(id, clan){
        this.id = id;
        this.clan = clan;
    }
}
let user = new User(0, 0)
//show console get and post
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes
require('./public/routes/routesServer')(app)

app.get('/algo', (req, res)=>{
    res.sendFile(__dirname +'/public/views/bcg.html')
})
app.get('/userid=*', (req, res)=>{
    res.sendFile(__dirname +'/public/views/detail.html')
})
app.post('/userdata', (req, res)=>{
    user = new User(req.body.id, req.body.clan)
    if(req.body.id!='undefined' && req.body.id!=''){
        res.json({status : 200, id : req.body.id})
    }else{
        res.json({status : 500, id :req.body.id})
    }
})
app.get('/modeluser', (req, res)=>{
    let data = {
        id : user.id,
        clan : user.clan
    }
    if(data!=null) res.status(200).json(data)
    else res.status(500).json({
        "msg": "Ningún dato encontrado"
    })
})



app.get('/bcg-07-21', (req, res)=>{
    res.sendFile(__dirname +'/public/views/index.html')
})
//app.get('/', (req, res)=>{
//    res.sendFile(__dirname +'/public/views/index3.html')
//})
app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/public/views/home.html')
})
app.get('/data', (req, res)=>{
    res.sendFile(__dirname +'/public/views/data-members.html')
})
app.get('/bcg', (req, res)=>{
    res.sendFile(__dirname +'/public/views/bdg.html')
})
//app.get('/', (req, res)=>{
//    res.sendFile(__dirname +'/public/views/codes.html')
//})
app.get('/bcg-08-21', (req, res)=>{
    res.sendFile(__dirname +'/public/views/index2.html')
})
app.get('/bcg-actual', (req, res)=>{
    res.sendFile(__dirname +'/public/views/index3.html')
})
app.get('/bienes', (req, res)=>{
    res.sendFile(__dirname +'/public/views/bienes.html')
})
app.get('/search/*', (req, res)=>{
    res.sendFile(__dirname +'/public/views/search.html')
})


app.get('/one-piece', (req, res)=>{
    res.sendFile(__dirname +`/files/one2.jpg`)
})
app.post('/upload',(req,res) => {
    let EDFile = req.files.file
    EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
})
//start
app.listen(app.get('port'), ()=>{
    console.log("server on port 3000")
})