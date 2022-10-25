const express = require("express");
const app = express();
var mysql = require('mysql');


app.use(express.json());

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "CSCI_6050_4050_TeamB9"
});


app.post('/register', (req, res) =>  {

    const email = req.body.email;
    const user_id = 0;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone = 0;
    const payment_id = 0;
    const status_id = 0;
    const acc_type_id = 0;
    const password = req.body.password;
    const birthDate = req.body.birthDate;

    db.query(
        "INSERT INTO users (user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, password, birthDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, password, birthDate], 
        (err, res) => {
        console.log(err);
        }
    );
})

app.listen(3001, () => {
    console.log("Running server");
});

