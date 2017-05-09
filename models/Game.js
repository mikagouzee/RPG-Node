var mongoose = require('mongoose');
var ObjectId = mongoose.ObjectId;
var ICaracteristic = require('./ICaracteristic');

var Schema = mongoose.Schema;

var ICareer = new Schema({
    name: String,
    jobSkills: [ICaracteristic]
})

var gameModel = new Schema({
    name: String,
    professions: [ICareer],
    rules: [{type:mongoose.Schema.Types.ObjectId, ref:'IGameRule' }]
})



module.exports = mongoose.model('Game', gameModel);