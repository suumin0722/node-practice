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
const home = require("./routes/home");
//미들웨어 등록하는 메서드 : use()
app.use("/", home);


//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


module.exports = app;

