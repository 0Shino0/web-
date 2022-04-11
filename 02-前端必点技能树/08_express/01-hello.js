// 1.安装 express
// 2.引入 express包
const { request, response } = require('express');
const express = require('express');

// 3.创建应用对象
const app = express();

// 4.路由的设置
app.get('/', (request,response) => {
    //设置响应
    response.end("Hello Express"); 
});

// 5.监听端口 启动服务
app.listen(8000,() =>{
    console.log('服务已经启动 ..');
})