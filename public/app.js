const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

// settings 
app.set('port', port)

//show console get and post
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes
require('./routes/routesServer')(app)

//start
app.listen(app.get('port'), ()=>{
    console.log("server on port 3000")
})