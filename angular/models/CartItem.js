const mongoose = require('mongoose'); // Brings in mongoose library to use

const cartItemSchema = mongoose.Schema({ // The schema, or frame for the info of the yo-yo's in the cart
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

const CartItem = module.exports = mongoose.model('CartItem', cartItemSchema); // Allows this model schema to be accessed from outside
