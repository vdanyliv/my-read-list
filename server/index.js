module.exports = function(app, passport) {
  require('./api/auth-api')(app, passport);
};
