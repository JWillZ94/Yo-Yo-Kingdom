const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

CartItem = require('../models/CartItem');

router.get('/', (req, res) => { // handles get request for yoyos
  CartItem.find((err, yoyos) => {
    if (err) {
      throw err;
    }
    res.json(yoyos);
  });
});

// Adds another yoyo
router.post('/', (req, res) => {
  CartItem.create(req.body, (err, yoyo) => {
    if (err) {
      throw err;
    }
    res.json(yoyo);
  });
});

// Deletes a yoyo
router.delete('/:id', (req, res) => {
  CartItem.findByIdAndRemove(req.params.id, req.body, (err, yoyo) => {
    if (err) {
      throw err;
    }
    res.json(yoyo);
  });
});

module.exports = router;
