var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var landing = require('./router/landing.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PATCH");
    next();
});
app.use(express.static(__dirname + '/images')) // в __dirname хранится абсолютный путь к файлу, тк мы находимся в корне проекта, а не в папке сервера 
app.use('/uploads', express.static('uploads'))
app.use("/landing", landing)

app.listen(8080, () => {
    console.log("server is start magic on ", 8080)
})
