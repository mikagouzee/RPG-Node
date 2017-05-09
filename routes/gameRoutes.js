var express = require('express');
var gameRouter = express.Router();

var routes = function(Game){
    gameRouter.route('/')
        .get(function(req, res){
            var query = {};

            Game.find(query, function(err, games){
                if(err)
                    res.status(500).send(err);
                else
                    //res.json(games);
                    res.send('This is the game page');
            })
        })

    
    return gameRouter;
}


module.exports = routes;