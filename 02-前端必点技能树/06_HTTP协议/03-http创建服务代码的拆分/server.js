module.exports = function (port) {
    const http = require('http');

    // 2.调用方法 创建服务器对象
    /* 
     * request 请求报文的封装对象
     * response 响应报文的封装对象
     */
    const callback = require('./callback');
    const serverCb = require('./serverOkCallback')
    const server = http.createServer(callback);


    // 3.监听端口  启动服务
    server.listen(port, serverCb);
}