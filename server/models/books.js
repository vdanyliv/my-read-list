const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MyBooks = new Schema({
  books: [{
    id: String,
    etag: String,
    volumeInfo: Object
  }],
  _creator: {
    type: Schema.ObjectId, ref: 'User'
  }
});

module.exports = mongoose.model('MyBooks', MyBooks);
