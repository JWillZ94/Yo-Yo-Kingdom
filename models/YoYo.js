const mongoose = require('mongoose'); // Brings in mongoose library to use

const yoyoSchema = mongoose.Schema({ // The schema, or frame for the info of the yo-yo's for sale
  img:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  cost:{
    type: Number,
    required: true
  },
  value:{
    type: Number,
    required: true
  }
});

const YoYo = module.exports = mongoose.model('YoYo', yoyoSchema); // Allows this model schema to be accessed from outside
