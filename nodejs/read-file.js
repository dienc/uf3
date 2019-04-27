var fs = require('fs');
const http = require('http');
var headers = { 'Access-Control-Allow-Origin':'*', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type": "application/json", "etag": new Date().getTime()};

fs.readFile('dades.json', 'utf8', function(err, contents) {
	data = contents;
});

http.createServer(function(request, response) {  
console.log("Request received");
response.writeHeader(200, headers); 
response.end(data);  
}).listen(3000);