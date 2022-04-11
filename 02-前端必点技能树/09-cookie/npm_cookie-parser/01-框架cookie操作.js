// cookie-parser
// 1.安装 cookie-parser
// 2.引入 cookie-parser
var cookieParser = require('cookie-parser');
const { request, response } = require('express');
// const { request, response } = require('express');

//安装 express
//引入 express包
const express = require('express');

//创建应用对象
const app = express();
// 3.设置中间件     cookie 方法中间件内部添加的
app.use(cookieParser());

//路由的设置
app.get('/', (request,response) => {
    //设置响应
    response.end("Hello Express"); 
});

// 设置cookie
app.get('/set-cookie',(request,response) => {
    // 4.设置 cookie
    // response.cookie('name','xiaohigh');
    response.cookie('email','xiaohigh@163.com');
    // 设置带有时效性的 cookie 单位是毫秒
    response.cookie('name','xiaohigh',{maxAge:1*60*1000});
    // 设置cookie app.use(cookieParser()); 内部添加的 response.cookie();
    response.send('cookie的设置');
});

// 获取cookie
app.get('/get-cookie',(request,response) =>{
    // 读取cookie
    console.log(request.cookies);//这里有 s 一定 注意
    response.send('cookie的读取');
});

// 清空 cookie
app.get('/clear-cookie',(request,response) => {
    response.clearCookie('email');
    response.send('cookie 的清除');
})

//监听端口 启动服务
app.listen(8000,() =>{
    console.log('服务已经启动 ..');
})