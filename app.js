'use strict';

//====LIST DEPENDENCIES===//
const express = require('express');
const session = require('express-session');
const parseurl = require('parseurl');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
mongoose.promise = require('promise');
const PostRecord = require('./src/client/app/models/post.js');
const bodyParser = require('body-parser');
const app = express();
const uri = 'mongodb://deploy:gdf876sdf789yfh32879fh82@ds141434.mlab.com:41434/main'
//=========================//

// Use the built-in express middleware for serving static files etc.
app.use('/', express.static('src/client'));
app.use(session({
  secret: 'wlonglvsch',
  resave: true,
  saveUninitialized: false
}));
app.use(bodyParser());

app.get('/api/get_posts', function(req, res) {
  PostRecord.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
app.post('/api/create_post', function(req, res) {
  const p = new PostRecord();
  p.title = req.body.title;
  p.desc = req.body.desc;
  p.user = req.body.user;
  p.interests = req.body.interests;
  p.location = req.body.location;
  p.endorsers = req.body.endorsers;
  p.id = req.body.id;
  p.date = req.body.date;
  p.posts = req.body.number;
  p.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json(p);
  });
 });

app.post('/auth/create_user', function(req, res) {
  if (req.body.email &&
  req.body.username &&
  req.body.password &&
  req.body.passwordConf) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/profile');
      }
    });
  }
})

mongoose.connect(uri, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', uri);
 }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});