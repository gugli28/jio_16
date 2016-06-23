var http = require('http');

var log4js = require('log4js');
log4js.loadAppender('log4js-tcp');

log4js.configure({
    appenders: [{
        type: 'log4js-tcp',
        loggerPort: 5001,
        loggerHost: "127.0.0.1",
        category: 'cheese',
    }]
});

var logger = log4js.getLogger('cheese');
logger.setLevel('ERROR');

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
///createserver takes a function which need to be called when a request is made

function onRequest(request,response){
	logger.fatal('Cheese was breeding ground for listeria.');

	// console.log(logger.log('info', 'request'))
	console.log('request user has requested ='+request.url);
	response.writeHead(200,{'Context-Type':'text/plain'});
	response.write('this is data u needed blah blah	');
	response.end();
}

//here in the below statement on request is called with request param when the event listen() is triggered ! 
http.createServer(onRequest).listen(8080);
console.log('server is running ....');


 
