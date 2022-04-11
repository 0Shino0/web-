/**
 * 创建一个 HTTP 服务
 * 
 * GET    /index.html      public/index.html     响应一个文件中的内容
 * GET    /css/app.css     public/css/app.css   响应文件内容
 */
//1. 引入 http 模块
const http = require('http');
const url = require('url');
const fs = require('fs');
//2. 创建服务对象 create 创建  server 服务
const server = http.createServer(function(request, response){
    //获取路径
    let pathname = url.parse(request.url, true).pathname;
    //判断
    if(pathname === '/index.html'){
        //读取 public/index.html 文件中的内容
        let html = fs.readFileSync(__dirname + '/public/index.html');
        response.end(html);
    }else if(pathname === '/css/app.css'){
        let html = fs.readFileSync(__dirname + '/public/css/app.css');
        response.end(html);
    }else if(pathname === '/css/home.css'){
        let html = fs.readFileSync(__dirname + '/public/css/home.css');
        response.end(html);
    }
    else if(pathname === '/js/app.js'){
        let html = fs.readFileSync(__dirname + '/public/js/app.js');
        response.end(html);
    }
    else {
        response.statusCode = 404;
        response.end('Not Found');
    }
});

//3. 监听端口, 启动服务  
server.listen(80, function(){
});