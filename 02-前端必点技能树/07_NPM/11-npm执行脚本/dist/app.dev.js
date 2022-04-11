"use strict";

var http = require('http');

var server = http.createServer(function (server, response) {
  response.end('Hello NPM');
});
server.listen(8000);