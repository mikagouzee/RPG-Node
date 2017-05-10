// var express = require('express');
// var characterRouter = express.Router();

var routes = function(app){

//CHARACTERS
    var CharacController = require('../controllers/characterController');

    app.route('/characters')
        .get(CharacController.list_all_character)
        .post(CharacController.create_a_character);

    app.route('/characters/:characterId')
        .get(CharacController.read_a_character)
        .put(CharacController.update_a_character)
        .delete(CharacController.delete_a_character);
    
//GAMES
    var gameController = require('../controllers/gameController');

    app.route('/games')
        .get(gameController.list_all_games)
        .post(gameController.create_a_game)

}

module.exports = routes;


