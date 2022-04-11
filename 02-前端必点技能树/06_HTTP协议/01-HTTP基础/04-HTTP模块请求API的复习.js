// 1.引入http模块
const http = require('http');
const { url } = require('inspector');

// 2.创建服务对象
const server = http.createServer(function(request,responnse){
    // 请求类型
    console.log(request.method);

    // URL
    console.log(request.url);

    // 协议版本号
    console.log(request.httpVersion);

    // 请求头
    console.log(request.headers);

    // url 路径以及查询字符串
    console.log(url.parse(request.url, true).pathname);//      /s
    console.log(url.parse(request.url, true).query);//     {wd:''关键字, charset:'utf8',a:100}
    
    responnse.end('HELLO NODEJS SERVER')
});

// 3.监听端口  启动服务
server.listen(8000,() =>{
    console.log('server is running.............');
})