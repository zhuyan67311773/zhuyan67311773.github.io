//1.
//npm run server

//1.引入express
const express  = require("express");
//2.创建一个实例app
const app = express();


//6.创建路由
app.get('/',(req,res)=>{
    res.send("Hello world!");
})

//4.创建端口
const port = process.env.PORT || 5000;

//5.监听运行
app.listen(port,()=>{
    console.log(`运行成功，${port}`);
})