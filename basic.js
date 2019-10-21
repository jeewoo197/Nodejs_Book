/*var http = require('http');
var server = http.createServer();

server.on('request',function(code){
  console.log("Request On");
})

server.on('connection',function(code){
  console.log('connection on');
})

server.on('close',function(code){
  console.log('close on');
})
server.listen(52273);
*/
require('http').createServer(function(request,response){
  response.writeHead(200,{'Content-Type' : 'text/html'});
  response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273,function(){
  console.log('Server Running at http://127.0.0.1:52273');
});
