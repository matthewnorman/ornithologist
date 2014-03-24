var http = require('http');
var express = require('express');
var app = express();

app.configure(function() {
    app.set('port', 8888);
});

app.get('/', function(req, res) {
    res.send('I am writing out some text');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Beginning to listen: %d', app.get('port'))
});