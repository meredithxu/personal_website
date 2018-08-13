/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('under construction\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

var express = require('express');
var app = express();
var port = 8080;

var router = require('./app/routes.js');
app.use('/', router);

app.listen(port, function(){
	console.log('localhost:8080');
});