//暴露的本质是module.exports的内容
//引入的内容是什么，取决于暴露的是什么
const {showData,showMsg}  = require('./module1')  //引入时 可以解构赋值
const {sum,sub} = require('./module2')
const uniq = require('uniq')   //引入第三方库，不需要 输入路径

const arr  = [10,1,26,1,9,0,11]
console.log(uniq(arr));