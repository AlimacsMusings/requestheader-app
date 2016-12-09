var requestIp = require('request-ip');
var osName= require('os-name');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
     
     //IP address
     var clientIp = requestIp.getClientIp(req); 
     //console.log("IP " + clientIp);
     
     //Language
     var lang = req.headers["accept-language"].slice(0,5);
     //console.log("Lang " + lang);

     //Operating system
     var opsys = osName();
     //console.log("Ops " + opsys);
     
     var str = JSON.stringify({'ipaddress' : clientIp,
                              'language' : lang,
                              'software' : opsys});
     //console.log(str);                         
     
     res.send(str);   
});


app.listen(process.env.PORT || 8080, function(){
	console.log('RequestHeader app listening on port 8080');
});
