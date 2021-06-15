const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

// settings 
app.use(express.static('public'))
app.set('port', port)

//show console get and post
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes
require('./public/routes/routesServer')(app)

//start
app.listen(app.get('port'), ()=>{
    console.log("server on port 3000")
})