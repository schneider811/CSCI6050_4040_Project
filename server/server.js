const cors = require('cors');
const express = require("express");
const app = express();
var mysql = require('mysql');
const port = 3001;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "4050",
    database: "CSCI_6050_4050_TeamB9"
});

app.set("port", process.env.PORT || port);


app.post('/register', (req, res) =>  {
    res.send(req.body);
    db.connect(function(err) {
        if(err) throw err;
        console.log("Connected!");
        db.query(
            "INSERT INTO users (user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, pword, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [3, req.body.first_name, req.body.last_name, 14567, req.body.email, 1, 2, 3, req.body.password, 15877], 
            (err, res) => {
                console.log(err);
            }
        )
    });

});


app.listen(port, () => {
    console.log("Listening to Server!");
});
















// const http = require("http");

// const host = 'localhost';
// const port = 3001;

// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "application/json");
//     res.writeHead(200);
//     res.end(`{"message": "This is a JSON response"}`);
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });



//     res.send("POST Request Called");
//     res.send("POST Request Called");
//     const email = req.body.email;
//     const user_id = 0;
//     const first_name = req.body.first_name;
//     const last_name = req.body.last_name;
//     const phone = 0;
//     const payment_id = 0;
//     const status_id = 0;
//     const acc_type_id = 0;
//     const password = req.body.password;
//     const birthDate = req.body.birthDate;
//     db.connect(function(err) {
//         //if(err) throw err;
//         //console.log("Connected!");
//         db.query(
//             "INSERT INTO users (user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, password, birthDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
//             [user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, password, birthDate], 
//             (err, res) => {
//                 //console.log(err);
//             }
//         )
//     });