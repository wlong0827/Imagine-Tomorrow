const mongoose = require('mongoose');

let Schema = mongoose.Schema;
const postSchema = new Schema({
  title:        String,
  desc:         String,
  user:         String,
  location:     String,
  endorsers:    Number,
  id:           String,
  date:         Date,
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;