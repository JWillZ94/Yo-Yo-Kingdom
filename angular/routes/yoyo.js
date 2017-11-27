const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

YoYo = require('../models/YoYo'); // brings the YoYo variable here for use from mongoose

// Home page, posts the yoyo collection on the page
router.get('/', (req, res) => { // handles get request for yoyos
  YoYo.find((err, yoyos) => {
    if (err) {
      throw err;
    }
    res.json(yoyos);
  });
});

// Posts yoyo by id number
router.get('/:id', (req, res) => {
  YoYo.findById(req.params.id, (err, yoyo) => {
    if (err) {
      throw err;
    }
    res.json(yoyo)
  });
});

// Adds another yoyo
router.post('/', (req, res) => {
  YoYo.create(req.body, (err, yoyo) => {
    if (err) {
      throw err;
    }
    res.json(yoyo);
  });
});

// Updates a yoyo
router.put('/:id', (req, res) => {
  YoYo.findByIdAndUpdate(req.params.id, req.body, (err, yoyo) => {
    if (err) {
      throw err;
    }
    res.json(yoyo);
  });
});

// Deletes a yoyo
router.delete('/:id', (req, res) => {
  YoYo.findByIdAndRemove(req.params.id, req.body, (err, yoyo) => {
    if (err) {
      throw err;
    }
    res.json(yoyo);
  });
});

module.exports = router;
