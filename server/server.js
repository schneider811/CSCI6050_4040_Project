//const insertData = require('insertData');
const cors = require('cors');
const express = require("express");
var router = express.Router();
const app = express();
const nodemailer = require('nodemon');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const port = 3001;
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

    addMovie(req.body, db);
    
    
});

app.post('/scheduleMovie', (req, res) => {
    console.log("Potato");
    console.log(req.body);
     scheduleMovie(req.body, db);

});

app.post('/addPromo', (req, res) => {

    addPromo(req.body, db);
    
    
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


app.get('/movieList', function (req, res) {
    
    db.query(
        "SELECT * from movie",
        function(err,result, fields) {
            if (err) throw err;
            res.send(result);
        }
    )
});

app.get('/scheduledMovieList', function (req, res) {
    
    db.query(
        "SELECT * from movie WHERE movie_id IN (SELECT movie_id FROM movie_show) ",
        function(err,result, fields) {
            if (err) throw err;
            res.send(result);
        }
    )
});


app.listen(port, () => {
    console.log("Listening to Server!");
});



async function registerUser(userData, database) {
    await database.query(
        "INSERT INTO users (first_name, last_name, phone, email, payment_id, status_id, acc_type_id, pword, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [userData.first_name, userData.last_name, userData.phone, userData.email, 0, 2, 2, userData.password, userData.birthdate], 
        (err, res) => {
            console.log(err);
            console.log(res);
        }
       
    )
}

async function loginUser(userData, database) {
    var loginUser = "";
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
    if(movieData.title != null &&
       movieData.duration != null &&
       movieData.category != null &&
       movieData.cast != null &&
       movieData.director != null &&
       movieData.producer != null &&
       movieData.synopsis != null && 
       movieData.posterName != null &&
       movieData.trailer != null )
       {
            await database.query(
                "INSERT INTO movie (title, duration, category, cast, director, producer, synopsis, reviews, trailerpic, trailer_video, rating) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [movieData.title, movieData.duration, movieData.category, movieData.cast, movieData.director, movieData.producer, movieData.synopsis, "No reviews", movieData.posterName, movieData.trailer, "3/5"], 
                (err, res) => {
                    console.log(err);
                    
                }
            )
            console.log("Movie Added!");
       }
       else{
        console.log("Invalid Info for New Movie!")
       }
}

async function scheduleMovie(schMovieData, database) {
    // if( schMovieData.date != null &&
    //     schMovieData.startTime != null &&
    //     schMovieData.movie != null &&
    //     schMovieData.room != null )
    // {
        await database.query(
            "INSERT INTO movie_show (dates, scheduledTime, movie_id, room_id) VALUES (?, ?, ?, ?)",
            [schMovieData.date, schMovieData.startTime, schMovieData.movie, 1], 
            (err, res) => {
                console.log(err);
            }
        )
        console.log("Movie Scheduled!");
    // // }
    // // else {
    //     console.log("Invalid Info for New Scheduled Movie!")
    // }
}

async function addPromo(promoData, database) {
    if( promoData.promoCode != null &&
        promoData.startDate != null &&
        promoData.endDate != null &&
        promoData.percentageOff != null )
    {
        await database.query(
            "INSERT INTO promotion (promo_code, startdate, enddate, percentoff) VALUES (?, ?, ?, ?)",
            [promoData.promoCode, promoData.startDate, promoData.endDate, promoData.percentageOff], 
            (err, res) => {
                console.log(err);
            }
        )
        console.log("Promo Added!");
    }
    else {
        console.log("Invalid Info for New Promo!")
    }
}

