const http= require('http');
const config=require('./config.json').servers;
const createServer=(host,port)=>{
    http.createServer((req,res)=>{
        res.write(200);
        res.end('server response from port'`${port}`)

    }).listen(port,host,()=>{
        console.log(`server running at http://${host}:${port}`)
    })
}
createServer('localhost',3001);
createServer('localhost',3002);
createServer('localhost',3003);
createServer('localhost',3004);
config.forEach(server=>createServer(server.host,server.port));