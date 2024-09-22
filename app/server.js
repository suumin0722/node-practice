"use strict";
/* app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html')
}); */

//모듈
const express = require('express');
const app = express();
const passport = require('passport');


/* app.post('/login', 
passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
    res.redirect('/');
});
 */

//라우팅    
const home = require("./src/routes/home");
//미들웨어 등록하는 메서드 : use()
app.use("/", home);


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

var passport = require("passport"),
    localStrategy = require("passport-local").Strategy;

app.post("/login/login_process",
   passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
   })
);


module.exports = app;

