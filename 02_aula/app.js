var http = require('http');

http.createServer(function(req, res) {
    res.end("Olá");
}).listen(8081);

console.log("O servidro esta funcionando")