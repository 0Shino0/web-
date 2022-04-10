var text = 'How are you Go GO GO YEs wdnmd';
var first = 'are';
var second = 'you';

var findOcurrences = function (text, first, second) {
    const words = text.split(""); //split() 方法用于把一个字符串分割成字符串数组。

    /*const 此声明创建一个常量，其作用域可以是全局或本地声明的块。
    与var变量不同，全局常量不会变为 window 对象的属性。
    需要一个常数的初始化器；也就是说，
    您必须在声明的同一语句中指定它的值（这是有道理的，因为以后不能更改）。
    */

    const list = [];
    for (let i = 2; i < words.length; i++) {
        if (words[i - 2] === first && words[i - 1] === second) {
            list.push(words[i]);
            /*
            push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
            注意： 新元素将添加在数组的末尾。
            注意： 此方法改变数组的长度。
            提示： 在数组起始位置添加元素请使用 unshift() 方法。
            */
        }
    }
    const size = list.length;
    const ret = Array(size).fill('');
    for (let i = 0; i < size; i++) {
        ret[i] = list[i];
    }
    return ret;
}



console.log(findOcurrences);