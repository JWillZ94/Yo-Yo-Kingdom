const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

User = require('../models/User');

router.get('/', (req, res) => { // find user
  User.find((err, users) => {
    if (err) {
      throw err;
    }
    res.json(users);
  });
});

router.get('/register', (req, res) => { // Register page
  res.json({ });
});

router.post('/register', (req, res) => { // Registers a new user
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log('Failed to register user.');
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/login');
    });
  });
});

router.get('/login', (req, res) => { // Login page
  res.send('log in');
});

router.post('/login', passport.authenticate('local'), (req, res) => { //logs in
  console.log('logged in');
});

router.get('/:id', (req, res) => { // find user by id
  User.findById(req.params.id, (err, user) => {
    if (err) {
      throw err;
    }
    res.json(user);
  });
});

router.post('/', (req, res) => { // adds another user
  User.create(req.body, (err, user) => {
    if (err) {
      throw err;
    }
    res.json(user);
  });
});

router.get('/', (req, res) => { // Logs out
  req.logout();
  console.log('logged out');
});

module.exports = router;
