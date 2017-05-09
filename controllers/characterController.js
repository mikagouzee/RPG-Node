var mongoose = require('mongoose');
var Character = mongoose.model('Character');

exports.list_all_character = function(req,res){
    //db.find({query},callback){};
    Character.find({}, function(err,task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_character = function(req,res){
    var new_character = new Character(req.body);
    console.log("creating a character");
    new_character.save(function(err,character){
        if(err)
            res.send(err);
        res.json(character);
    });
}

exports.read_a_character = function(req, res){
    Character.findById(req.params.characterId, function(err,character){
        if(err)
            res.send(err);
        res.json(character);
    });
};

exports.update_a_character = function(req,res){
    Character.findOneAndUpdate(req.params.characterId, req.body, {new:true}, function(err,character){
        if(err)
            res.send(err);
        res.json(character);
    });
};

exports.delete_a_character = function(req,res){
    Character.remove({
        _id: req.params.characterId
    },function(err,character){
        if(err)
            res.send(err);
        res.json({message:'character deleted with succes'});
    });
};