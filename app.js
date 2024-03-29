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
const User = require('./src/client/app/models/user.js');
const bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);
const app = express();
const uri = 'mongodb://deploy:gdf876sdf789yfh32879fh82@ds141434.mlab.com:41434/main'
//=========================//

mongoose.connect(uri, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', uri);
 }
});
let db = mongoose.connection;

// Use the built-in express middleware for serving static files etc.
app.use('/', express.static('src/client'));
app.use(session({
  secret: 'wlonglvsch',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
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
  p.posts = req.body.posts;
  p.save(function(err) {
    if (err) {
      res.send(err);
    } else {
        res.json(p);
    }
  });
 });

app.post('/auth/create', function(req, res) {
  console.log(req.body);

  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return res.send(err);
  }

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return res.send(err)
      } else {
        return res.redirect('/vision-wall.html'); // LVSTODO: landing page after login
      }
    });

  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return res.send(err);
  }
});
app.post('/auth/login', function(req, res) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return res.send(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/vision-wall.html'); // LVSTODO: landing page after login
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return res.send(err);
  }
});
// GET for logout logout
app.get('/auth/logout', function (req, res) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return res.send(err);
      } else {
        return res.redirect('/vision-landing.html'); // LVSTODO: landing page after logout
      }
    });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});