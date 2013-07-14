var fs=require('fs');
var express = require('express');
var htmlfile="index.html";
var app = express();

app.get('/', function(request, response) {
  var html= fs.readFileSync(htmlfile).toString();
  response.send(html);
});


app.listen(8080);
