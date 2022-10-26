//const insertData = require('insertData');
const cors = require('cors');
const express = require("express");
const app = express();
var mysql = require('mysql');
const nodemailer = require('nodemon');
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


app.post('/email', async (req, res) => {
    if(err) throw err;
    res.send('Confirmation Email Sent');
    const {email} = req.body.email;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: 'julie.rolfson28@ethereal.email', // generated ethereal user
        pass: '[D3UGHBFK68ExqF9znT', // generated ethereal password
        },
    });


    // send mail with defined transport object
    const msg = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Confirmation of Account", // Subject line
        text: "Hello, this is confirmation that your account has been registered!" // plain text body
    }

    let info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


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