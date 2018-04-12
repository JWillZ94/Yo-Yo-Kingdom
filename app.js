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

// API
var yoyo = require('./routes/yoyo'); // the API for the yoyos
var profile = require('./routes/profile'); // the API for the profiles
var user = require('./routes/user'); // the API for the users
var cartItem = require('./routes/cartItem');

// Mongoose, splits one database into multiple collections
YoYo = require('./models/YoYo'); // brings in the yoyos collection model
Profile = require('./models/Profile'); // brings in the profiles collection model
User = require('./models/User'); // brings in the users collection model
CartItem = require('./models/CartItem');
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
app.use(passport.initialize()); // Passport
app.use(passport.session()); // Passport
passport.use(new LocalStrategy(User.authenticate())); // Passport
passport.serializeUser(User.serializeUser()); // Passport
passport.deserializeUser(User.deserializeUser()); // Passport

// require('./config/passport')(passport);

// Angular output folder that express will access
app.use(express.static(path.join(__dirname, 'dist'))); // connects this server to the dist folder in angular, connects B-E to F-E

// API Location
app.use('/api/yoyo', yoyo); // links API to /api/yoyo route
app.use('/api/profile', profile); // links api to /api/profile route
app.use('/api/user', user); // links api to /api/user route
app.use('/api/cart-item', cartItem);

// Send all other requests to angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// JSON "Pretty" format
app.set('json spaces', 2); // makes the json formatted info pretty

// Server
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('backend is good');
});

module.exports = app; // Exposes the app to other files.
