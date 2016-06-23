var http = require('http');
var winston = require('winston');

var transport = require('winston-tcp');
///createserver takes a function which need to be called when a request is made

function onRequest(request,response){
	console.log('request user has requested ='+request.url);
	response.writeHead(200,{'Context-Type':'text/plain'});
	response.write('this is data u needed blah blah	');
	response.end();
}

//here in the below statement on request is called with request param when the event listen() is triggered ! 
http.createServer(onRequest).listen(28777);
console.log('server is running ....');


////creating an instance of logger with 2 transports (console and a file)
// var logger = new (winston.Logger)({
//     transports: [
//       new (winston.transports.Console)(),
//       new (winston.transports.File)({ filename: 'somefile.log' })
//     ]
//   });

// ./bin/logstash -f first_pipeline.conf --auto-reload
 
// ./bin/kibana 
//./elasticsearch



 


// import winston from 'winston'
// import Transport from 'winston-tcp'

// winston.add(new Transport({
//   host: '127.0.0.1',
//   port: 1337
// })

// winston.info('foo')

// import Transport from 'winston-tcp'

// let logger = new (winston.Logger)({
//   transports: [
//     new (Transport)({
//       host: '127.0.0.1',
//       port: 1337,
//       json: true,
//       timestamp: true
//     })
//   ]
// })

// logger.log('info', 'foo')

