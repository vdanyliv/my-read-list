module.exports = function(app) {
  require('./api/auth-api')(app);
  require('./api/my-books-api')(app);
};
