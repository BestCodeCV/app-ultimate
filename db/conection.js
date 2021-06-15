let mysql = require('mysql')
let con = mysql.createConnection({
    host: 'bxjlqwmvkpok3owhmaxk-mysql.services.clever-cloud.com',
    user: 'u7nv995aenag6bhc',
    password: 'h3wHl6SGBPVuAUAU1JQL',
    database: 'bxjlqwmvkpok3owhmaxk'
})
con.connect()
module.exports = con;