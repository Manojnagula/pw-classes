const http = require('http');

const PORT = 3011;
const hostname = 'localhost';

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.statusCode = 200;
    res.setHeader("content-type","application/JSON");
    res.end( JSON.stringify({"name": "manoj kumar"}));


    }else if (req.url === '/about'){
        res.statusCode = 200;
    res.setHeader("content-type","text/plain");
    res.end("about page");


   }else if(req.url === '/contact') {
    res.statusCode = 200;
    res.setHeader("content-type","text/plain");
    res.end("contact page");

    }else{
        res.statusCode = 500;
        res.setHeader("content-type","text/plain");
        res.end("page not found!");
    
    }
    });
server.listen(PORT,()=>{
    console.log(`server is running at ${hostname} and ${PORT}`);
})