// 2.引入 mongoose
const mongoose = require('mongoose');

// 3.连接数据库                         数据库名称
mongoose.connect|('mongodb://127.0.0.1/project',{ useNewUrlParser:true,useUnifiedTopology:true});

// 4.绑定连接成功 回调
mongoose.connection.on('open',() =>{
    // 5.创建文档结构对象
    const StarSchema = new Schema({
        name:String,
        age:Number,
        tags:Array
    });
    // 6.创建文档模型对象           集合名称
    const StarModel = mongoose.model('star',StarSchema);
    // 7.批量插入 
    StarModel.insertMany([
        {
            name:'蔡徐坤',
            age:26,
            tags:['唱','跳','rap','篮球']
        },
        {
            name:'马保国',
            age:69,
            tags:['不讲武德','大意了','我没有闪']
        },
        {
            name:'马老师',
            age:35,
            tags:['鬼刀','走位','炸胡']
        }
    ],(err,data) =>{
        if(err) throw err;
        // 如果成功 输出data
        console.log(data);
        // 选做 
        mongoose.connection.close();
    });
})