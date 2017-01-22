const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('MyBooks', new Schema({
  books: [{
    id: String,
    etag: String,
    volumeInfo: Object
  }],
  _creator: {
    type: Schema.ObjectId, ref: 'User'
  }
}));
