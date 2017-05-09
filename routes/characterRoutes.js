// var express = require('express');
// var characterRouter = express.Router();

var routes = function(app){
    var CharacController = require('../controllers/characterController');

    app.route('/characters')
        .get(CharacController.list_all_character)
        .post(
            CharacController.create_a_character
            // function(req,res){
            // var charac = new Character(req.body);
            // charac.save();
            // console.log(charac);
            // res.status(201).send(charac);
            //}
        );

    app.route('/characters/:characterId')
        .get(CharacController.read_a_character)
        .put(CharacController.update_a_character)
        .delete(CharacController.delete_a_character);
    
}

module.exports = routes;


