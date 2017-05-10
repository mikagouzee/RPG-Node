var mongoose = require('mongoose');
var Game = mongoose.model('Game');

exports.list_all_games = function(req, res){
    console.log("Getting all games from the controller at "+Date.now());
    Game.find({}, function(err,game){ 
        if(err){
            console.log('Whoops, error in the controller : '+err);
            res.send(err);
        }
        res.json(game);
    });
};

exports.create_a_game = function(req,res){
    var new_game = new Game(req.body);

    new_game.save(function(err,game){
        if(err)
            res.send(err);
        res.json(game);
    });
};