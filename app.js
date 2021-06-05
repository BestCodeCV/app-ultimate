const express = require('express')
const jwt = require('jsonwebtoken')
const keys = require('./settings/keys')
var app = express();
app.get('/', function(req, res){
    res.send('Soy el server de NOde js y te saludo')
})
//app.listen(3000, function(){
    //console.log("OK")
//})
app.set('key', keys.key)
app.use(express.urlencoded({
    extended:false
}))
app.use(express.json())
app.listen(process.env.PORT||3000, ()=>{
    console.log("Localhost:3030 conectado")
})

app.post('/login', (req, res)=>{
    if(req.body.usuario == 'admin'&&req.body.pass=='12345'){
        const payload = {
            check:true
        }
        const token = jwt.sign(payload, app.get('key'),{
            expiresIn:'7d'
        })
        res.json({
            message: 'AUTENTIFICACION EXITOSA',
            token: token
        })
    }else{
        res.json({
            message: 'usuario y/o contraseña incorrecta'
        })
    }
})

const verificacion = express.Router()
verificacion.use((req, res, next)=>{
    let token = req.headers['x-access-token']|| req.headers['authorization']
    //console.log(token)
    if(!token){
        res.status(401).send({
            error: 'Error 404'
        })
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length)
        console.log(token)
    }
    if(token){
        jwt.verify(token, app.get('key'), (error, decoded)=>{
            if(error){
                return res.json({
                    message: 'El token es inválido'
                })
            }else{
                req.decoded = decoded
                next()
            }
        })
    }
})
app.get('/info', verificacion, (req, res)=>{
    res.json('INFORMACIÓN IMPORTANTE ENTREGADA')
})