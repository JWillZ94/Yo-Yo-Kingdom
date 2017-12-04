const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors'); // cors combines front-end and back-end
const http = require('http');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const app = express();

// API variable
var yoyo = require('./routes/yoyo'); // brings yoyo variable here for use from yoyo router, also its the API
var profile = require('./routes/profile');
var user = require('./routes/user');

// Mongoose
YoYo = require('./models/YoYo'); // brings the YoYo variable here for use from mongoose
Profile = require('./models/Profile');
User = require('./models/User');
//mongoose.connect('mongodb://localhost/yo-yos'); // connects to my yo-yos database
mongoose.connect('mongodb://localhost/users');
// mongoose.connect('mongodb://localhost/profiles');
var db = mongoose.connection; // links the mongoose connection to a variable
db.on('error', console.error.bind(console, 'unfortunate connection error:')); // Tests if theres a connection error
db.once('open', () => { // Lets me know when database is successfully connected
  console.log('database connected');
});

// Passport
app.use(passport.initialize());
app.use(passport.session());

// require('./config/passport')(passport);

// Middleware
app.use(cors()); // enables cors middleware, which lets F-E and B-E interact
app.use(bodyParser.json()); // body-parser middleware
app.use(bodyParser.urlencoded({extended: false})); // body-parser middleware

// Angular output folder that express will access
app.use(express.static(path.join(__dirname, 'dist'))); // connects this server to the dist folder in angular, connects B-E to F-E

// API Location
app.use('/yoyo', yoyo); // puts this API part on /yoyo
app.use('/profiles', profile);
app.use('/user', user);

// Send all other requests to angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('json spaces', 2); // makes the json formatted info pretty

// Server
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('backend is good');
});

module.exports = app;
