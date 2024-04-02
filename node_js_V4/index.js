const http = require("http");
const path = require("path");
const fs = require('fs');

const server = http.createServer(( req, res ) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'), (err,content) => {
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.end(content)
    //     })
    // }

    // else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'), (err,data) => {
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.end(data)
    //     })
    // }

    // else if(req.url === '/service'){
    //     fs.readFile(path.join(__dirname,'public','service.html'), (err,data) => {
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.end(data)
    //     })
    // }


    // Better Way and handing content type issue

    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);
    let extName = path.extname(filePath);
    let contentType = 'text/html';
    console.log(extName)

    switch(extName){

        case '.css':
            contentType = 'text/css';
            break;
        
        case '.png':
            contentType = 'text/png';
            break;

        case '.jpg':
            contentType = 'text/jpg';
            break;

        case '.js':
            contentType = 'text/javascript';
            break;
        
        case '.json':
            contentType = 'application/json';
            break;       
    }

    fs.readFile(filePath, (err,data) => {
        res.writeHead(200,{'Content-Type':`${contentType}`})
        res.end(data);
    })


});

server.listen(3000, () => console.log("server in running on 3000"))