const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = app => {
  app.post('/signup', (req, res) => {
    const userName = req.body.name;
    const userPassword = req.body.password;

    User.findOne({ 'local.name': userName }, (err, user) => {
      if (err) throw err;
      if (user) {
        res.json({
          error: 'Username already used!'
        });
      } else {
        const newUser = new User();

        newUser.local.name = userName;
        newUser.local.password = userPassword;

        newUser.save(saveError => {
          if (saveError) throw saveError;
          const token = jwt.sign(newUser, app.get('secret'), {
            expiresIn: 1440
          });

          res.json({
            user: user.local.name,
            authorized: true,
            secretToken: token
          });
        });
      }
    });
  });

  app.post('/signin', (req, res) => {
    const userName = req.body.name;
    const userPassword = req.body.password;

    User.findOne({ 'local.name': userName }, (err, user) => {
      if (!user) {
        res.json({ 'error': 'User not found!' });
      } else if (user.local) {
        if (user.local.password !== userPassword) {
          res.json({ 'error': 'Password wrong' });
        } else {
          const token = jwt.sign(user.local, app.get('secret'), {
            expiresIn: 1440
          });

          res.json({
            user: user.local.name,
            authorized: true,
            secretToken: token
          });
        }
      }
    });
  });

  app.post('/isAuthorized', (req, res) => {
    const token = req.body.token;
    console.error(req.cookies);
    if (token) {
      jwt.verify(token, app.get('secret'), (err, decoded) => {
        if (err) {
          res.json({
            error: 'Failed to authenticate token'
          });
        } else {
          res.json(decoded);
        }
      });
    } else {
      res.status(403).send({
        error: 'No token provided.'
      });
    }
  });
};

