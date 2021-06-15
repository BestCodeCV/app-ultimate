const mysql = require('mysql')

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asistente'
})
let comandosModel = {}
comandosModel.getComandos = (callback)=>{
    if(connection){
        connection.query('SELECT * FROM comandos ORDER BY id', (err, rows)=>{
            if(err) throw err
            callback(null, rows)
        })
    }
}
comandosModel.insertComando = (comandoData, callback)=>{
    if(connection){
        connection.query('INSERT INTO comandos SET ?', comandoData, (err, rows)=>{
            if(err) throw err
            callback(null, {
                'insertId' : rows.insertId
            })
        })
    }
}
comandosModel.updateComando = ( comandoData, callback)=>{
    if(connection){
        const sql = `
        UPDATE comandos SET
        comando = ${connection.escape(comandoData.comando)},
        respuesta = ${connection.escape(comandoData.respuesta)},
        accion = ${connection.escape(comandoData.accion)},
        tipo = ${connection.escape(comandoData.tipo)}
        WHERE id = ${connection.escape(comandoData.id)}
        `
        connection.query(sql, (err, result)=>{
            if(err) throw err
            callback(null, {
                msg: 'Actualizado correctamente'
            })
        })
    }
}
comandosModel.deleteComando = (id, callback)=>{
    if(connection){
        let sql = `
        SELECT * FROM comandos WHERE id = ${connection.escape(id)}
        `
        connection.query(sql, (err, row)=>{
            if(row){
                let sql = `
                DELETE FROM comandos WHERE id = ${id}
                `
                connection.query(sql, (err, result)=>{
                    if(err) throw err
                    callback(null, {
                        msg: 'Eliminado correctamente'
                    })
                })
            }else{
                callback(null, {
                    msg: 'No existe un comando con ese id'
                })
            }
        })
    }
}
module.exports =  comandosModel