//const insertData = require('insertData');
const cors = require('cors');
const express = require("express");
const app = express();
var mysql = require('mysql');
const port = 3001;
var user_id = 0;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "4050",
    database: "CSCI_6050_4050_TeamB9"
});

app.set("port", process.env.PORT || port);

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    
    // db.query(
    //     "INSERT INTO users (user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, pword, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    //     [3, req.body.first_name, req.body.last_name, 14567, req.body.email, 1, 2, 3, req.body.password, 15877], 
    //     (err, res) => {
    //         console.log(err);
    //     }
    // )
});

app.post('/register', (req, res) =>  {
    user_id += 1;
    res.send(req.body);
    registerUser(req.body,db);

});


app.listen(port, () => {
    console.log("Listening to Server!");
});



function registerUser(userData, database) {
    database.query(
        "INSERT INTO users (user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, pword, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [user_id, userData.first_name, userData.last_name, 2292549871, userData.email, 1, 2, 3, userData.password, userData.birthdate], 
        (err, res) => {
            console.log(err);
        }
    )
}

function loginUser(userData, database) {

}