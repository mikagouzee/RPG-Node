var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ICaracteristic = new Schema({
    name:String,
    value:Number,
    maxValue:Number
});

module.exports = ICaracteristic;