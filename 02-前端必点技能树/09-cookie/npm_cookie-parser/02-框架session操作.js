const express = require('express');
//1. 安装 express-session
//2. 引入 模块
const session = require('express-session');
const app = express();
//3. 设置中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

//设置 session, 一般是用户在登录成功之后 会设置 session
app.get('/set-session', (request, response) => {
    request.session.name = 'xiaohigh';
    request.session.email = '1231231@qq.com';
    response.send('登录成功');
});

//读取 session   检测用户是否登录 会用到session的读取
app.get('/get-session', (request, response) => {
    //读取session
    //用户名
    console.log('当前登录的用户为' + request.session.name);
    console.log('当前登录的邮箱为' + request.session.email);
    response.send('个人中心');
});

//session 的销毁
app.get('/destroy-session', (request, response) => {
    //销毁session的方法
    request.session.destroy(function(){
        console.log('销毁成功');
        response.send('安全退出登录');
    });
});


app.get('/', (request, response) => {
    response.end('Hello Express');
});

app.listen(80, () => {
    console.log('服务已经启动.. 端口 80 监听中....');
});