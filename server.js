
const express = require('express')
// 引入路由
const routers = require('./router/index');

const app = express()
const port = 5566
//设置允许跨域访问该服务.
app.all('', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
// 托管静态文件
app.use('/',express.static('dist'))
// 使用路由组件
app.use('/wzry',routers.wzryRouter)
// 启动服务器
app.listen(port, () => console.log(`Example app listening on port ${port}!`))