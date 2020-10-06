// https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var usersResponse = require('./users.js');
var app = express();
var port = 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}))
app.use(cookieParser());
app.use(express.static('src/app'));
app.get('/',(req,res)=> {
  res.sendFile('index.html',{root: 'src/app'})
  // res.sendFile('index.js',{root: 'src/app'})
  // res.sendFile('index.styles.css',{root: 'src/app'})
})

app.get('/users',(req,res) => {
  console.log(req.signedCookie);
  console.log(req.headers);
  res
    .cookie('JWT','1234',{
      maxAge: 86_400_000,
      httpOnly: true,
      secure: true,
      sameSite: true,
    })
    .cookie('something','else',{
      maxAge: 86_400_000,
      httpOnly: true,
      secure: true,
      sameSite: true,
    })
    .status(200)
    .send(
    // {aaa: 1, b: JSON.stringify(usersResponse)}
    usersResponse
  )

})

app.listen(port,() => (`<h1>SERVER LISTENING ON PORT ${port}</h1>`))