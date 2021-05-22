// *
// load env var's
// *
const dotenv = require('dotenv');
if (
  process.env.NODE_ENV !== 'production' &&
  process.env.NODE_ENV !== 'staging'
) {
  // load local config from .env file
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}

//
// Echo config into logs (DO NOT LOG ANY SECRET KEYS)
//
console.group('Environment Config:');
console.log('ENV: ' + process.env.NODE_ENV);
console.groupEnd('Environment Config:');

//
// Server
//
const express = require('express');
const app = require('express')();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.set('trust proxy', true);
app.use(helmet());
app.use(
  // allow discord avatars from https://cdn.discordapp.com
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'img-src': ["'self'", 'https:', 'data:'],
      'frame-src': ["'self'"],
      'connect-src': ["'self'"],
      'worker-src': ["'self'", 'blob:'],
    },
  })
);
app.use(express.json()); //Used to parse JSON bodies
app.use(cookieParser());
app.use(
  morgan('short', {
    skip: function (req, res) {
      // remote AWS health checks from logs for clarity
      const isHealthCheck = req.originalUrl.indexOf('health') > 0;
      let skipLog = isHealthCheck;
      // if (skipLog) {
      //   console.log({ isHealthCheck });
      // }
      return skipLog;
    },
  })
);
app.use(
  express.static('build', {
    index: false,
  })
);

//
// Start Server
//
var server = app.listen(8080, function () {
  console.log('App running on port 8080');
});

//
// API
//

const api = require('./api/http');
app.use('/api', api);

// html
const routesApi = require('./api/html');
app.use('/', routesApi);
