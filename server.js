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

//create a server using express
const express = require('express');
const app = express();
var port = 8080;

app.get('/', function(req, res) {
	res.send('Home page under construction');
});

app.listen(port, function(){
	console.log('listening on port 8080!');
});