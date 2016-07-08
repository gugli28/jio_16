var http = require('http');
var winston = require('winston');

var transport = require('winston-tcp');
require('winston-logstash');
// require('winston-http');

var logger = new (winston.Logger)({
	// console.log('test Logger'),
  transports: [
    // new (winston.transports.TCP)({
    //   host: '127.0.0.1',
    //   port: 5001,	
    //   json: true,
    //   timestamp: true
    // }) ,
    
    new(winston.transports.Logstash)({
    	port: 5002,
    	host: '127.0.0.1'
    }),
    // new(winston.transports.Http)({
    // 	port: 5003,
    // 	host: '127.0.0.1'
    // })
  ]
})

// winston.add(winston.transports.Logstash, {
//     port: 5002,
//     node_name: 'my node name',
//     host: '127.0.0.1'
//   });

// logger.log('info', 'foo')

///createserver takes a function which need to be called when a request is made

function onRequest(request,response){
	// console.log(Buffer.byteLength(request, 'utf8'))
	logger.log('info', 'request')
	// console.log(logger.log('info', 'request'))
	console.log('request user has requested ='+request.url);
	response.writeHead(200,{'Context-Type':'text/plain'});
	response.write('this is data u needed blah blah	');
	response.end();
}

//here in the below statement on request is called with request param when the event listen() is triggered ! 
http.createServer(onRequest).listen(8080);
console.log('server is running ....');


 
