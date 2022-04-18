var http =require ('http')
var url = require('url')
var router = require('./router')


function start(){
function onRequest (req,res){
var pathname = url.parse(req.url).pathname;
// console.log('request for '+ pathname +'is received');

router.route(pathname);


res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();

}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");

}

exports.start = start;