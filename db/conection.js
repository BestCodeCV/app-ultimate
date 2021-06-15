let mysql = require('mysql')
let con = mysql.createConnection({
    host: 'localhost',
    user: 'id16513207_user_database',
    password: 'pAsS_admin_2021',
    database: 'id16513207_asistente'
})
con.connect()
module.exports = con;