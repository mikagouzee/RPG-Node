var mongoose = require('mongoose');
var ICaracteristic = require('./ICaracteristic');
var ObjectId = mongoose.ObjectId;

var Schema = mongoose.Schema;


var characterModel = new Schema({
    characterName:String,
    playerName:String,
    //baseAttr:[{type:mongoose.Schema.Types.ObjectId, ref:'ICaracteristic'}]
    baseAttr: [ICaracteristic],
    // stat: [ICaracteristic],
    // spendPoints: [ICaracteristic],
    // skills:[ICaracteristic],
    // game: {type:mongoose.Schema.Types.ObjectId, ref:'Game'}
});



module.exports = mongoose.model('Character', characterModel);