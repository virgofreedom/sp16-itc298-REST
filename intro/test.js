var http = require("http"), fs = require("fs");

http.createServer(function(req,res){
    var path = req.url.toLocaleLowerCase();
    //res.writeHead(200,{'Content-type':'text/plain'});
    //res.end('Hello Node JS');
    switch (path) {
        case '/':
            // code
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('<h1>HOME</h1>');
            break;
        case '/about':
            // code
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('<h1>ABOUT</h1>');
            break;
        default:
            // code
    }
}).listen(process.env.PORT);