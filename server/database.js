var mysql = require('mysql');

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "4050",
    database: "CSCI_6050_4050_TeamB9"
});


db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to Database!");
});

module.exports = db;