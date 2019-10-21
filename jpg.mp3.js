var fs = require('fs');
var http = require('http');
var http2 = require('http');

http.createServer(function(request,response){
  fs.readFile('hotaro.jpg',function(error,data){
    response.writeHead(200,{'Content-Type' : 'image/jpeg'});
    response.end(data);
  });
}).listen(52273,function(){
  console.log('server starting http://127.0.0.1:52273');
});

http2.createServer(function(request,response){
  fs.readFile('02. Nonsense Bungaku.mp3',function(error,data){
    response.writeHead(200,{'Content-Type' : 'audio/mp3'});
    response.end(data);
  });
  }).listen(52274,function(){
  console.log('server starting http://127.0.0.1:52274');
});
