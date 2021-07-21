const express = require('express')
const request = require('request');
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const path = require('path')

// settings 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', port)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
  app.get('/fetch', (req, res) => {
    request(
      { url: req.query.url },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).send('error');
        }
        res.send(body);
      }
    )
  });

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