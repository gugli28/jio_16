var winston = require('winston');


// winston.add(winston.transports.File, { filename: 'myapp.log' });
// // winston.remove(winston.transports.Console);

// winston.log('info', 'Hello distributed log files!');
// winston.info('Hello again distributed logs');

// winston.level = 'debug';
// winston.log('debug', 'Now my debug messages are written to console!');

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File) ({ filename: 'somefile.log' })
    ]
  });
  //
  // Logging
  //
logger.log('info', 'Hello distributed log files!');
logger.info('Hello again distributed logs');

// logger.configure({
// level: 'verbose',
// transports: [
//   new (require('winston-daily-rotate-file'))(opts)
// ]
// });

winston.log('info', 'Test Log Message', { anything: 'This is metadata' });