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

    addToFavorite.userId = requestData.userId;
    addToFavorite.books.push(bookObject);

    MyBooks.findOneAndUpdate({ 'userId': requestData.userId }, {$push: { books: bookObject } }, (err, obj) => {
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

    MyBooks.findOne({ 'userId': requestData.userId }, (err, obj) => {
      if ('books' in obj) {
        result(obj.books);
      } else {
        result({ 'response': 'failed' });
      }
    });

    function result(objMsg) {
      res.json(objMsg);
    }
  });
};
