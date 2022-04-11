const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request,response) => {
    // 读取 table.html 的文件内容
    const data = fs.readFileSync(__dirname + '/table.html');


    response.end(data);
});

server.listen(8000);