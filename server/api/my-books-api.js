const MyBooks = require('../models/books');

module.exports = app => {
  app.post('/addToFavorite', (req, res) => {
    const requestData = req.body;
    const addToFavorite = new MyBooks();
    const bookObject = {
      id: requestData.id,
      etag: requestData.etag,
      volumeInfo: requestData.volumeInfo
    };

    addToFavorite._creator = requestData.userId;
    addToFavorite.books.push(bookObject);

    MyBooks.findOneAndUpdate({ '_creator': requestData.userId }, {$push: { books: bookObject } }, (err, obj) => {
      if (err || !obj) {
        addToFavorite.save(saveError => {
          if (saveError) result({response: 'failed'});
          result({response: 'success'});
        });
      } else {
        result({response: 'success'});
      }

      function result(objMsg) {
        res.json(objMsg);
      }
    });
  });

  app.post('/retrieveFavorite', (req, res) => {
    const requestData = req.body;

    MyBooks.findOne({_creator: requestData._id})
    .populate('_creator', 'local.name')
    .exec((err, obj) => {
      if (!err && obj) {
        result(obj);
      } else {
        result({ 'response': 'failed' });
      }
    });

    function result(objMsg) {
      res.json(objMsg);
    }
  });
};
