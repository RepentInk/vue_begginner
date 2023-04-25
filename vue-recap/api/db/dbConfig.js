const mysql = require('mysql')
const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",  //maxim
    password: "",  //maxim
    database: "trainees"
})

dbConnection.connect((err)=>{
    if(err)
        return console.log(err)
    else{
        return console.log('Database running successfully...')
    }
})

module.exports = dbConnection