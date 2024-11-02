const http = require("node:http");

const server = http.createServer(function (req, res) {
    if (req.url === "/getSecretData") {
        res.end("Shhhhh.... There's no secret data here");
    }
    res.end("Hello World");
})

server.listen(7777);