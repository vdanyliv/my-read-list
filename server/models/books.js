const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('MyBooks', new Schema({
  userId: String,
  books: [{
    id: String,
    etag: String,
    volumeInfo: Object
  }]
}));
