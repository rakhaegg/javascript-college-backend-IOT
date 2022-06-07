// models/Book.js

const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
  _id: {
    type: Object,
  },
  _msgiud: {
    type: String,
  },
  payload: {
    type: String,
   
  },
  qos: {
    type: Number
  },
  retain: {
    type: Boolean
  },
  topic: {
    type: String
  },
});

module.exports = Sensor = mongoose.model('sensor', SensorSchema);