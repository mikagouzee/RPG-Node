var mongoose = require('mongoose');

var ObjectId = mongoose.ObjectId;
var Schema = mongoose.Schema;

var ICaracteristic = require('./ICaracteristic');
var Game = require('./Game');

var characterModel = new Schema({
    characterName:String,
    playerName:String,

    baseAttr: [ICaracteristic],
    stat: [ICaracteristic],
    spendPoints: [ICaracteristic],
    skills:[ICaracteristic],

    game: Game
});



module.exports = mongoose.model('Character', characterModel);
