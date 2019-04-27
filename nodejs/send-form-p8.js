const http = require('http');
var headers = { 'Access-Control-Allow-Origin':'*', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type": "application/json", "etag": new Date().getTime()};

http.createServer(function(request, response) {  
console.log("Request received");
data = "<label class='label'>Posa el teu nom: <input type='text' id='nombox' class='input' name='nom' size='30'></input></label> \
					<input type='text' id='Val_nombox' value='' disabled='disabled'></input> \
					<br> \
					<label class='label'>Posa una password: <input type='password' id='passwdbox' class='input' name='password' size='8'></input></label> \
					<input type='text' id='Val_passwdbox' value='' disabled='disabled'></input> \
					<br> \
					<input type='button' id='button2' value='ENVIA'></input>";


response.writeHeader(200, headers); 
response.end(data);  
}).listen(3000);