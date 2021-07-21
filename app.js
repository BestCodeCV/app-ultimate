const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const path = require('path')

// settings 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', port)


//show console get and post
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes
require('./public/routes/routesServer')(app)

app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/public/views/index.html')
})
//start
app.listen(app.get('port'), ()=>{
    console.log("server on port 3000")
})