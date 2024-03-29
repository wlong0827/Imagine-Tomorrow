var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: {
      vwall : APP_DIR + '/vwall.jsx',
      vpage : APP_DIR + '/vpage.jsx',
      vcreate : APP_DIR + '/vcreate.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query : {
            presets : ['react']
        }
      }
    ]
  }
};

module.exports = config;
