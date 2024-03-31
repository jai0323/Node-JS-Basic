const http = require("http");
const server = http.createServer((req,res) => {
    console.log(req.url)
    res.write("hello world!")
     //res.statusCode(200);
    res.end()
});

server.listen(3000,()=> console.log("server is running"))
