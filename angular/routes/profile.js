const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

Profile = require('../models/Profile');

router.get('/', (req, res) => {
  Profile.find((err, profiles) => {
    if (err) {
      throw err;
    }
    res.json(profiles);
  });
});

router.get('/:id', (req, res) => {
  Profile.findById(req.params.id, (err, profile) => {
    if (err) {
      throw err;
    }
    res.json(profile);
  });
});

router.post('/', (req, res) => {
  Profile.create(req.body, (err, profile) => {
    if (err) {
      throw err;
    }
    res.json(profile);
  });
});

router.put('/:id', (req, res) => {
  Profile.findByIdAndUpdate(req.params.id, req.body, (err, profile) => {
    if (err) {
      throw err;
    }
    res.json(profile);
  });
});

router.delete('/:id', (req, res) => {
  Profile.findByIdAndRemove(req.params.id, req.body, (err, profile) => {
    if (err) {
      throw err;
    }
    res.json(profile);
  });
});

module.exports = router;
