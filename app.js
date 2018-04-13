const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors'); // cors combines front-end and back-end
const http = require('http');

const app = express();

// API
var yoyo = require('./routes/yoyo'); // the API for the yoyos

// Mongoose, splits one database into multiple collections
YoYo = require('./models/YoYo'); // brings in the yoyos collection model
mongoose.connect('mongodb://localhost/yoyostore');
var db = mongoose.connection; // links the mongoose connection to a variable
db.on('error', console.error.bind(console, 'unfortunate connection error:')); // Tests if theres a connection error
db.once('open', () => { // Lets me know when database is successfully connected
  console.log('database connected');
});

// Middleware
app.use(cors()); // enables cors middleware, which lets F-E and B-E interact
app.use(bodyParser.json()); // body-parser middleware
app.use(bodyParser.urlencoded({extended: false})); // body-parser middleware

// Angular output folder that express will access
app.use(express.static(path.join(__dirname, 'dist'))); // connects this server to the dist folder in angular, connects B-E to F-E

// API Location
app.use('/api/yoyo', yoyo); // links API to /api/yoyo route

// Send all other requests to angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// JSON "Pretty" format
app.set('json spaces', 2); // makes the json formatted info pretty

// Server
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('backend connected');
});

module.exports = app; // Exposes the app to other files.
