const { response } = require('express')
const express = require('express')

const cors = require('cors')

// 创建app实例对象
const app = express()

// 请求体参数 需要解析
// 使用中间件解析 urlencoded 编码形式的请求体参数
app.use(express.urlencoded({extended:true}))
//使用中间件解析 json 编码形式的请求体参数
app.use(express.json())
app.use(cors()) //为所有请求 配置特殊响应头

// 暴露静态资源
app.use(express.static(__dirname + '/src'))

// 响应GET请求---可以接收query参数
app.get('/test_get' , (request,response) =>{
    console.log('有人请求/test_get了--携带的query参数是：',request.query);
    // response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500') // 只允许 5500
    // response.setHeader('Access-Control-Allow-Origin','*')  //允许所有端口
    // response.setHeader('Access-Control-Expose-Origin','*')
    response.send('hello_test_get')

})

// 响应GET请求---可以接收params参数
app.get('/test_get2/:name/:age' , (request,response) =>{
    console.log('有人请求/test_get了--携带的params参数是：',request.params);
    response.send('hello_test_get2')
})

// 响应get请求
app.get('/get_person',(request,response) =>{
    // 函数
    console.log('有人请求/get_person')
    const person = {name:'tom',age:18,sex:'女'}
    response.send(JSON.stringify(person))
})

// 响应get请求
app.get('/get_person_delay',(request,response) =>{
    // 函数
    console.log('有人请求/get_person')
    const person = {name:'tom',age:18,sex:'女'}
    setTimeout(() => {
        response.send(JSON.stringify(person))
    },2000) 
    
})

// 
// 响应get请求---jQuery
app.get('/test_jquery_get',(request,response) =>{
    // 函数
    console.log('有人请求/test_jquery_get')
    const car = {name:'zawaluoduo',price:'25w'}

    response.send(JSON.stringify(car))
})

// 响应post请求---jQuery
app.post('/test_jquery_post',(request,response) =>{
    // 函数
    console.log('有人请求/test_jquery_post',request.body)
    const car = {name:'zawaluoduo',price:'25w'}
    response.send(JSON.stringify(car))
})

// 响应POST请求--可以接收请求体参数
app.post('/test_post',(request,response) =>{
    // 函数
    console.log('有人请求/test_post了---携带的请求体参数是',request.body)
    response.send('hello_test_post')
})

// 响应put请求--可以接收请求体参数
app.options('/test_put',(request,response) =>{
    // 函数
    // response.setHeader('Access-Control-Allow-Origin','*')  //允许所有端口
    // response.setHeader('Access-Control-Expose-Origin','*')
    // response.setHeader('Access-Control-Allow-Methods','*')
    response.send()
})

// 响应put请求--可以接收请求体参数
app.put('/test_put',(request,response) =>{
    // 函数
    // response.setHeader('Access-Control-Allow-Origin','*')  //允许所有端口
    // response.setHeader('Access-Control-Expose-Origin','*')
    response.send('hello_test_put')
})

// 
app.get('/test_jsonp',(request,response) => {
    // 函数体
    const {callback} = request.query
    const person =[ {name:'tom',age:18},{name:'老刘',age:5}]
    response.send(`${callback}(${JSON.stringify(person)})`)
})

app.listen(8080,(err) => {
    if(!err){
        console.log('测试ajax请求的服务器开启成功了!测试地址如下');
        console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
        console.log('http://127.0.0.1:8080/2_xhr的五种转态.html');
        console.log('http://127.0.0.1:8080/3_ajax_get请求.html');
        console.log('http://127.0.0.1:8080/4_ajax_post请求.html');
        console.log('http://127.0.0.1:8080/5_ajax_解析json数据.html');
        console.log('http://127.0.0.1:8080/6_ajax_处理IE浏览器get请求缓存问题.html');
        console.log('http://127.0.0.1:8080/7_ajax请求的异常与超时处理.html');
        console.log('http://127.0.0.1:8080/8_ajax取消请求.html');
        console.log('http://127.0.0.1:8080/9_ajax_避免多次重复请求.html');
        console.log('http://127.0.0.1:8080/10_jquery封装的ajax.html');
        console.log('http://127.0.0.1:8080/11_演示回调地狱.html');
        
        
    }
 })