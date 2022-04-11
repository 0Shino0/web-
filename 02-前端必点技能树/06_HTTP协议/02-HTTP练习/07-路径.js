const http = require('http');
const url = require("url");
//引入 fs 模块 (文件操作)
const fs = require('fs');
const qs = require('querystring');
const server = http.createServer((request, response) => {
    //获取内容
    let {method} = request; 
    let pathname = url.parse(request.url, true).pathname;
    //添加响应头
    response.setHeader('Content-type','text/html;charset=utf-8');
    //判断登录
    if(method.toUpperCase() === 'GET' && pathname=== '/login'){
        //设置响应体
        response.end(fs.readFileSync(__dirname + '/login.html'));
    } else if(method.toUpperCase() === 'GET' && pathname === '/register'){
        //注册
        response.end(fs.readFileSync(__dirname + '/register.html'));
    }else if(method.toUpperCase() === 'POST' && pathname === '/register'){
        //注册用户的信息提取
        //1. 声明变量
        let body = '';
        //2. 绑定 data 事件
        request.on('data', chunk => {
            body += chunk;
        })
        //3. 绑定end事件
        request.on('end',() => {
            // 将用户的字符串信息转化为 对象
            const data = qs.parse(body);
            // 所有的用户信息读取出来
            const users = fs.readFileSync('./users.json').toString();
            // 将字符串转化为对象
            const usersObj = JSON.parse(users);
            // 将新用户的对象压入到userObj对象
            usersObj.data.push(data);
            // console.log(usersObj);
            // 将对象转化为JSON字符串
            let str = JSON.stringify(usersObj);
            // 存储 新的数据
            fs.writeFileSync('./users.json',str);

            response.end('注册成功');
        })
       
    }
    else{
        response.end('<h1>404 Not Found</h1>');
    }
});

server.listen(8000);