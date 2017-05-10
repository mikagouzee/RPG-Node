var mongoose = require('mongoose');

var ObjectId = mongoose.ObjectId;
var Schema = mongoose.Schema;

var ICaracteristic = require('./ICaracteristic');
var ICareer = require('./ICareer');

var gameModel = new Schema({
    name: String,
    professions: [ICareer]
    //rules: [{type:mongoose.Schema.Types.ObjectId, ref:'IGameRule' }]
});


//THIS CREATES A MODEL IN DB BASED ON THE gameModel DEFINED UPPER
mongoose.model('Game',gameModel);

//THIS EXPORTS THE VARIABLE FOR USE IN OTHER FILES
// module.exports = mongoose.model('Game', gameModel);
module.exports = gameModel;