var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('<head><meta http-equiv="Content-type" content="text/html; charset=utf-8"></head><body><p>bazen olan şeyler her zaman olmayabilir</p><br/><a href="http://twitter.com/eralpkaraduman">eralp</a></body>');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
