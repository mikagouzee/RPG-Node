var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var ICareer = new Schema({
    name: String
    //jobSkills: [ICaracteristic]
});

module.exports = ICareer;