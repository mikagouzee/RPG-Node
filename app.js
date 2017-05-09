var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.port || 1337;

var mongoose = require('mongoose');
var Character = require('./models/characterModel');
var Game = require('./models/game');


mongoose.Promise = global.Promise;
//var characterDb = mongoose.createConnection('mongodb://localhost/characterApi');
mongoose.connect('mongodb://localhost/characterApi');
//var gameDb = mongoose.createConnection('mongodb://localhost/gameApi');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var characRouter = require('./Routes/characterRoutes');
characRouter(app);
// var gameRouter = require('./Routes/gameRoutes')(Game);

//app.use('/characters', characRouter);
//app.use('/games', gameRouter);

// Simplest route you can do 
// app.get('/', function(req, res){
//     res.send('Hello ! You\'re on my app and it\'s friday');
// })


app.listen(port, function(err){
    if(!err)
        console.log('Running on port ' + port);
    else
        console.log('error : ' + err);
})