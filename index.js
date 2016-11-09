const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gutil = require('gulp-util');
const webpackConfigProd = require('./webpack.config.prod');
const webpackConfigDev = require('./webpack.config.dev');

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const configDB = require('./server/mongo/config.js');

const app = express();
const env = process.env.USER_ENV;

mongoose.connect(configDB.url);

if (env === 'dev') {
  webpackConfigDev.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(webpackConfigDev);
  const jsServer = new WebpackDevServer(compiler, {
    contentBase: './build/',
    hot: true,
    quiet: false,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  });

  jsServer.listen(9000, '0.0.0.0', () => {
    console.error('Front-end listen: localhost:9000');
  });
} else {
  webpack(webpackConfigProd, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack:build]', stats.toString({
      chunks: false,
      colors: true
    }));
  });
}

/**/

if (env === 'dev') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.set('port', process.env.PORT || 9001);
}

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./server/index')(app, passport);

if (env === 'prod') {
  app.set('port', process.env.PORT || 9000);
  app.use(express.static(__dirname + '/build/'));

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
  });
}

app.listen(app.get('port'), () => {
  console.error('listening port: ' + app.get('port'));
});
