const http = require('node:http');
const config = require('./config')
const render = require('./render')
const util = require('util')
const consts = require('./const')
const url = require('node:url')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    var path = url.parse(req.url,true).pathname
    console.log(path);
    if(path=="/"||path=="/home"){
        render.ReadView('./view/Home.html',res);
    }else{
        render.ReadView('./view/About.html',res);
    }
    
});
server.listen(config.port, config.hostname, () => {
    console.log(util.format(consts.messageServerRun,config.hostname,config.port));
});