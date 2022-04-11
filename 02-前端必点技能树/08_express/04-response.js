// 安装 express
// 引入 express 包
const { request, response } = require('express');
const express = require('express');

// 创建应用对象
const app = express();
app.get('/res',(request,response) =>{
    // 响应状态码
    response.statusCode = 404;
    // 响应转态字符串
    response.statusMessage = 'ceshi';
    // 响应头
    response.setHeader('week','san');
    // response.setHeader('Content-type','text/html;charset=utf-8');
    // 响应体
    response.write('Hello');

    // 设置响应
    response.send('断剑重铸之日，骑士归来之时');
    // 下载响应
    // response.download('./package.json');
    // 将一个文件中的内容响应给浏览器（必须为绝对路径）
    response.sendFile(__dirname + '/form.html');
    // 跳转
    response.redirect('http://www.baidu.com');
});

// 监听端口 启动服务
app.listen(8000,() =>{
    console.log('服务已经启动 ..');
});