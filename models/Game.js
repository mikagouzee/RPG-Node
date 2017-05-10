var mongoose = require('mongoose');
var ObjectId = mongoose.ObjectId;
var Schema = mongoose.Schema;

var ICaracteristic = require('./ICaracteristic');
var ICareer = require('./ICareer');

// var ICareer = new Schema({
//     name: String,
//     //jobSkills: [ICaracteristic]
// })

var gameModel = new Schema({
    name: String,
    professions: [ICareer]
    //rules: [{type:mongoose.Schema.Types.ObjectId, ref:'IGameRule' }]
})



module.exports = mongoose.model('Game', gameModel);