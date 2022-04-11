// 1.引入 http 模块
const http = require('http');

// 2.调用方法 创建服务器对象
/* 
    * request 请求报文的封装对象
    * response 响应报文的封装对象
*/
const server = http.createServer(function(request,response){

    response.end('Hello HTTP server');

});
    
// 3.监听端口  启动服务
/* 
    端口号    计算的服务端口窗口  总共65536个  8000 3000 9000 8080
    默认端口 80 
    ctrl + c 停止服务
*/
server.listen(8000,function(){
    console.log('服务器已经启动，端口 8000 坚挺中......');
})
