const comandos = require('../models/comandos')

module.exports = app =>{
    app.get('/comandos', (req, res)=>{
        comandos.getComandos((err, data)=>{
            if(err) throw err
            res.status(200).json( data)
        })
    })
    app.get('/comandos/:tipo', (req, res)=>{
        const comandoData = {
            tipo :req.params.tipo
        }
        comandos.getOneComandos(comandoData, (err, data)=>{
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
                res.status(200).json({
                    message: 'Comando ingresado correctamente'
                })
            }else{
                res.status(500).json({
                    message: 'Error al registrar comando'
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
                res.status(200).json({
                    message : 'Comando actualizado correctamente'
                })
            }else{
                res.status(500).json({
                    message: 'Error al actualizar comando'
                })
            }
        })
    })
    app.delete('/comandos/:id', (req, res)=>{
        comandos.deleteComando(req.params.id, (err, data)=>{
            if(data && data.msg === 'No existe un comando con ese id' || data.msg === 'Eliminado correctamente'){
                res.json({
                    message: 'Comando eliminado correctamente'
                })
            }else{
                res.status(500).json({
                    message: 'Error al eliminar comando'
                })
            }
        })
    })
}