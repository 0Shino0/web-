const http = require('http');

const server = http.createServer((server,response) => {

    response.end('Hello NPM');
});

server.listen(8000);