var http = require('http');
http.createServer(function (req, res) {
    console.log('I am creating a server')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I am writing out some text')
}).listen(8888, '127.0.0.1');