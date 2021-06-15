let mysql = require('mysql')
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asistente'
})
con.connect()
module.exports = con;