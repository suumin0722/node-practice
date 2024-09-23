"use strict";
/* app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html')
}); */

//모듈
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const passport = require('passport');
const localStrategy = require("passport-local").Strategy;




// JSON 데이터 파싱 미들웨어
app.use(bodyParser.json());
// URL-encoded 데이터 파싱 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));


//라우팅    
const home = require("./src/routes/home");
app.use("/", home); //미들웨어 등록하는 메서드 : use()


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(passport.initialize());
//app.use(passport.session());  // 세션 사용 시

passport.use(new localStrategy(
    {
    usernameField: 'id',
    passwordField: 'psword'
    },
    (username, password, done) => {
    console.log("localStrategy", username, password);
        // 사용자 인증 로직
    // done(null, user);  // 인증 성공 시
    //done(null, false); 
}));

/* app.post('/login',    
passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
res.redirect('/');
}); */

       
app.post("/login", (req, res, next) => {
    console.log("POST /login 요청이 들어왔습니다.");
    next(); // 다음 미들웨어로 넘어갑니다.
},
   passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
   })
);

module.exports = app;

