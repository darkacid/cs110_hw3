let  http_server = require("http");

http_server.createServer(function(req,res)
{
  
    switch(req.url)
    {
        case "/":
            res.writeHead(200,{"Content-Type": "text/plain"});
            res.end("Have a nice day bro, enjoy the response!");
            break;

        case "/bro":
            res.writeHead(200,{"Content-Type": "text/plain"});
            res.end("DUDEER!");
            break;
            
        case "/help":
            res.writeHead(200,{"Content-Type": "text/plain"});
            res.end("Ask the TA!");
            break;
            
            
        case "/about":
            res.writeHead(200,{"Content-Type": "text/plain"});
            res.end("I don't even know what to say...");
            break;

        case "/math":
            res.writeHead(200,{"Content-Type": "text/plain"});
            res.end("Is bad!");
            break;

        case "/why":
            res.writeHead(200,{"Content-Type": "text/plain"});
            res.end("I dont know.");
            break;
        }


}).listen(4242);
