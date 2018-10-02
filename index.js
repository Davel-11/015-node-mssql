const express = require('express');
const app = express();

var sql = require("mssql");

app.get('/', (req, res) =>{
    res.send('Hellow ');
});


var dbConfig = {
    server: "localhost",
    database: "databasename",
    user: "sa",
    password: "password",
    port: 1433
};

function getEmp(){
    var conn= new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);

    conn.connect(function (err){
        if (err){
            console.log(err);
        }
        req.query("Select * from table", function(err, recordset) {
            if (err){
                console.log(err);
            }else {
                console.log(recordset);
            }
            conn.close();
        });
    });
}

getEmp();

app.listen(3000, () => console.log('Listening 3000') );