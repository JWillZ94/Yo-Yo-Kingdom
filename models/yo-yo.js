const mongoose = require('mongoose'); // Brings in mongoose library to use

const yoyoSchema = mongoose.Schema({ // The schema, or frame for the info of the yo-yo's for sale
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
  coolPoints:{
    type: Number,
    required: true
  }
});

const YoYo = module.exports = mongoose.model('YoYo', yoyoSchema); // Allows this model schema to be accessed from outside

var MegaMind = new YoYo({ // An example of how to add a new yo-yo to the schema
  name: 'Mega Mind',
  description: 'The most intellectually sound yo-yo ever invented, created and played with by Einstein himself.',
  cost: 300,
  coolPoints: 70
});

/* MegaMind.save((err, MegaMind) => { // Saves the document, or the new yo-yo to the database, commented out cuz it kept adding
  if (err) {
    console.error(err)
  }
  console.log('works');
}); */

YoYo.find((err, yoyos) => { // Shows all of the yo-yos I have in the database
  if (err) {
    return console.error(err);
  }
  console.log(yoyos);
});

// Get Yo-Yos
module.exports.getYoYos = (callback, limit) => { // Makes app.js able to access this function from the route
  YoYo.find(callback).limit(limit);
}
