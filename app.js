var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.port || 1337;

var mongoose = require('mongoose');

 var Character = require('./models/characterModel');
 var Game = require('./models/Game');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/characterApi');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var characRouter = require('./Routes/api_routes');
characRouter(app);

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