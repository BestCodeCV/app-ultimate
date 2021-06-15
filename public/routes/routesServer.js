const comandos = require('../models/comandos')

module.exports = app =>{
    app.get('/comandos', (req, res)=>{
        comandos.getComandos((err, data)=>{
            if(err) throw err
            res.status(200).json(data)
        })
    })
    app.post('/comandos', (req, res)=>{
        const comandoData = {
            id: null,
            comando: req.body.comando,
            respuesta: req.body.respuesta,
            accion: req.body.accion,
            tipo: req.body.tipo
        }
        comandos.insertComando(comandoData, (err, data)=>{
            if(err) throw err
            if(data && data.insertId){
                console.log(data)
                res.json({
                    success:true,
                    msg: 'comando insertado',
                    data: data
                })
            }else{
                res.status(500).json({
                    success: false,
                    msg: 'Error'
                })
            }
        })
        console.log(req.body)
    })
    app.put('/comandos/:id', (req, res)=>{
        const comandoData = {
            id: req.params.id,
            comando: req.body.comando,
            respuesta: req.body.respuesta,
            accion: req.body.accion,
            tipo: req.body.tipo
        }
        comandos.updateComando(comandoData, (err, data)=>{
            if(err) throw err
            if(data && data.msg){
                res.json(data)
            }else{
                res.json({
                    success: "false",
                    msg: 'Error'
                })
            }
        })
    })
    app.delete('/comandos/:id', (req, res)=>{
        comandos.deleteComando(req.params.id, (err, data)=>{
            if(data && data.msg === 'No existe un comando con ese id' || data.msg === 'Eliminado correctamente'){
                res.json({
                    success: true,
                    data
                })
            }else{
                res.status(500).json({
                    msg: 'Error'
                })
            }
        })
    })
}