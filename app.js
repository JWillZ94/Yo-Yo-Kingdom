const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

YoYo = require('./models/yo-yo');

mongoose.connect('mongodb://localhost/yo-yos', { useMongoClient: true }); // connects to my yo-yo database
mongoose.Promise = global.Promise; // idk but the docs told me to put this here sooo...
var db = mongoose.connection; // links the mongoose connection to a variable
db.on('error', console.error.bind(console, 'unfortunate connection error:')); // Tests if theres a connection error
db.once('open', () => { // Lets me know when database is successfully connected
  console.log('database connected');
});

app.use(bodyParser.json());

app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.send('go to yoyos');
});

app.get('/yo-yos', (req, res) => {
  YoYo.getYoYos(function (err, YoYo) {
    if (err) {
      throw err;
    } else {
      res.json(YoYo);
    }
  });
});

app.listen(3000, () => {
  console.log('servin it up');
});
