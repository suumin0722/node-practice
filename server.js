const express = require('express');
const app = express();

app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

app.listen(8000, function(){
    console.log('listening on 8000')
});

//누군가가 /pet으로 방문을 하면
//pet관련된 안내문을 띄워주자
app.get('/pet', function(요청, 응답) {
    응답.send('펫용품 쇼핑 사이트입니다.');
});
// /beauty 로 들어가면 뷰티용품 사이트 이동
app.get('/beauty', function (req, res) {
    res.send('뷰티용품 페이지');
});

// /beauty 로 들어가면 뷰티용품 사이트 이동
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});