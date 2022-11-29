//const insertData = require('insertData');
const cors = require('cors');
const express = require("express");
var router = express.Router();
const app = express();
const nodemailer = require('nodemon');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const port = 3001;
var user_id = 0;
var movie_id = 0;
var promo_id = 0;
const oneDay = 1000 * 60 * 60 * 24;
var db = require('./database');

var session;

app.use(express.json());
app.use(cors());
app.use(sessions({
    secret: "thisisthekeyforthecsci4050project",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true
}))
app.use(cookieParser());


app.set("port", process.env.PORT || port);



// Database Access
app.post('/register', (req, res) =>  {
    user_id += 1;
    registerUser(req.body,db);
    res.send(req.body);

});

app.post('/login', (req, res) =>  {
    
    console.log(req.session);
});

app.post('/logout',(req,res) => {
    req.session.destroy();
});

app.post('/addMovie', (req, res) => {
    movie_id += 1;
    addMovie(req.body, db);
    console.log("Movie Added!");
    res.send("Movie Added!");
});

app.post('/addPromo', (req, res) => {
    promo_id += 1;
    addPromo(req.body, db);
    console.log("Promo Added!");
    res.send("Promo Added!");
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



async function registerUser(userData, database) {
    await database.query(
        "INSERT INTO users (user_id, first_name, last_name, phone, email, payment_id, status_id, acc_type_id, pword, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [user_id, userData.first_name, userData.last_name, 0, userData.email, 0, 1, 3, userData.password, userData.birthdate], 
        (err, res) => {
           // console.log(err);
        }
    )
}

async function loginUser(userData, database) {
    var loginUser = ""
    //console.log(userData);
    await database.query(
        "SELECT * from users WHERE email=?", [userData.email],
        (err, res) => {
            console.log(err);

            // console.log(res);
            // console.log("Test");
            loginUser = res;
        }
    )
    return loginUser
}

async function addMovie(movieData, database) {
    await database.query(
        "INSERT INTO movie (movie_id, title, duration, category, cast, director, producer, synopsis, reviews, trailerpic, trailer_video, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [movie_id, movieData.title, movieData.duration, movieData.category, "No Cast", "No director", "No producer", movieData.synopsis, "No reviews", "No pic", movieData.trailer, "3/5"], 
        (err, res) => {
            console.log(err);
        }
    )
}

async function addPromo(promoData, database) {
    await database.query(
        "INSERT INTO promotion (promo_id, promo_code, startdate, enddate, percentoff) VALUES (?, ?, ?, ?, ?)",
        [promo_id, promoData.promoCode, promoData.startDate, promoData.endDate, promoData.percentageOff], 
        (err, res) => {
            console.log(err);
        }
    )
}