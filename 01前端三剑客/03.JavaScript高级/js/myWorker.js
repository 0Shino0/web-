function fun(num) {
    var a = 0;
//    num   就是我传入的循环次数
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
            a++;
        }
    }
    return a;
}
//  只要是主线程给你发送消息  onmessage对应的回调函数 自动就会执行
self.onmessage = function (event) {
    //event身上有一个属性 叫做data   用来接收 主线程传递过来的消息
   var result = fun(event.data);
//  将子线程 处理好的内容  在传回给主线程操作
    self.postMessage(result);

}