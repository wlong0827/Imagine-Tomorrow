'use strict';

//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./backend/models/test.js');
const app = express();
const uri = 'mongodb://deploy:fubviguibviqwbvkqj@ds141434.mlab.com:41434/test'
//=========================//

// Use the built-in express middleware for serving static files from './frontend'
app.use('/static', express.static('frontend'));

app.get('/api/test', function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
app.post('/api/test', function(req, res) {
  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageofGuest,
  }).then(signature => {
    res.json(signature)
  });
});

mongoose.connect(uri, { useMongoClient: true }).then(function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});