var mongoose = require('mongoose');

var ObjectId = mongoose.ObjectId;
var Schema = mongoose.Schema;

var ICaracteristic = require('./ICaracteristic');
//var Game = mongoose.model('Game');
var Mygame = require('./Game');

var characterModel = new Schema({
    characterName:String,
    playerName:String,

    baseAttr: [ICaracteristic],
    stats: [ICaracteristic],
    spendPoints: [ICaracteristic],
    skills:[ICaracteristic],

    game: Mygame 
});



module.exports = mongoose.model('Character', characterModel);
