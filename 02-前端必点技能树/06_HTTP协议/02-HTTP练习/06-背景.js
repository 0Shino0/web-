const http = require('http');
const url = require('url');
const server = http.createServer((request,response) => {
    // 设置响应头
    // response.setHeader('Content-Type','text/html;charset=utf-8');
    // 获取请求url中的 [bg]参数
    let bg = url.parse(request.url,true).query.bg ? url.parse(request.url,true).query.bg : '#edf';

    // 设置响应体
    // response.end('xxx');
    response.end(`
    <!doctype html>
    <html>
    </html>
    <head>
        <meta charset="utf-8">
            <style>
            body{
                background:${bg};
            }
            </style>
    </head>
    <body>
            <h1>
            心若止水
            得则静
            不得也静
            </h1>
    </body>
    </html>
        
    `)
});

server.listen(8000);