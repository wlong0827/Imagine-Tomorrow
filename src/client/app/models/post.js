const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postSchema = new Schema({
  title:        String,
  desc:         String,
  user:         String,
  interests:    [String],
  location:     String,
  endorsers:    Number,
  id:           String,
  date:         Date
})

const PostRecord = mongoose.model('PostRecord', postSchema);
module.exports = PostRecord;