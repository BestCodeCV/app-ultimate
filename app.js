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


//show console get and post
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes
require('./public/routes/routesServer')(app)

app.get('/algo', (req, res)=>{
    res.sendFile(__dirname +'/public/views/bcg.html')
})
app.get('/main', (req, res)=>{
    res.sendFile(__dirname +'/public/views/main.html')
})



app.get('/anterior', (req, res)=>{
    res.sendFile(__dirname +'/public/views/index.html')
})
app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/public/views/index.html')
})
app.get('/actual', (req, res)=>{
    res.sendFile(__dirname +'/public/views/index2.html')
})
app.get('/bienes', (req, res)=>{
    res.sendFile(__dirname +'/public/views/bienes.html')
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