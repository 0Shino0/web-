require('http')
.createServer((request,response) => {
    // 行
        // 状态码
        response.statusCode = 404;
        response.statusCode = 500;
        // 状态字符串
        response.statusMessage = 'TESTdasdasd';
    // 头
        response.setHeader('Content-type','text/html;charset=utf-8');
        // 自定义头信息
        response.setHeader('abc','1000');
    // 体   (响应体不能为空)
        response.write('1111');
        response.write('2222');
        response.write('3333');
        response.write('4444');

    response.end('ok');
})
.listen(8000)