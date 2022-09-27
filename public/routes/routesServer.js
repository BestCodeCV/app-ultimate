const comandos = require('../models/comandos')

module.exports = app =>{
    app.get('/api/guilds', (req, res)=>{
        const data = require("../jsons/guilds.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/api/members', (req, res)=>{
        const data = require("../jsons/members.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/nbcg/byob', (req, res)=>{
        const data = require("../js/bcg-byob.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/nbcg/kraken', (req, res)=>{
        const data = require("../js/bcg-kraken.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/bcg/byob', (req, res)=>{
        const data = require("../js/temporal.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/byob', (req, res)=>{
        const data = require("../js/datos-byob.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/byob2', (req, res)=>{
        const data = require("../js/datos-byob2.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/byob3', (req, res)=>{
        const data = require("../js/datos-byob3.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/leones', (req, res)=>{
        const data = require("../js/datos-leones.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/leones2', (req, res)=>{
        const data = require("../js/datos-leones2.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/leones3', (req, res)=>{
        const data = require("../js/datos-leones3.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/praetorians', (req, res)=>{
        const data = require("../js/datos-praetorians.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/praetorians2', (req, res)=>{
        const data = require("../js/datos-praetorians2.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/praetorians3', (req, res)=>{
        const data = require("../js/datos-praetorians3.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/kraken', (req, res)=>{
        const data = require("../js/datos-kraken.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/kraken2', (req, res)=>{
        const data = require("../js/datos-kraken2.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios/kraken3', (req, res)=>{
        const data = require("../js/datos-kraken3.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios', (req, res)=>{
        const data = require("../js/datos-gremio.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios2', (req, res)=>{
        const data = require("../js/datos-gremio2.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/usuarios3', (req, res)=>{
        const data = require("../js/datos-gremio3.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/edificios', (req, res)=>{
        const data = require("../js/datos-ge.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/edificios2', (req, res)=>{
        const data = require("../js/datos-ge2.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/edificios3', (req, res)=>{
        const data = require("../js/datos-ge3.json");
        if(data!=null) res.status(200).json(data)
        else res.status(500).json({
            "msg": "Ningún dato encontrado"
        })
    })
    app.get('/comandos', (req, res)=>{
        comandos.getComandos((err, data)=>{
            if(err) throw err
            res.status(200).json( data)
        })
    })
    app.get('/comandos/:account', (req, res)=>{
        const comandoData = {
            account :req.params.account
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
            tipo: req.body.tipo,
            usuario: req.body.usuario
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
            id: req.body.id,
            comando: req.body.comando,
            respuesta: req.body.respuesta,
            accion: req.body.accion,
            tipo: req.body.tipo,
            usuario: req.body.usuario
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
                res.status(200).json({
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