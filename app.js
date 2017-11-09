'use strict';

//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Post = require('./src/client/app/models/post.js');
const app = express();
const uri = 'mongodb://deploy:fubviguibviqwbvkqj@ds141434.mlab.com:41434/test'
//=========================//

// Use the built-in express middleware for serving static files from './frontend'
app.use('/', express.static('src/client'));

app.get('/api/get_posts', function(req, res) {
  Post.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
app.post('/api/create_post', function(req, res) {
  Post.create(req.body).then(retObj => {
    res.json(retObj)
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