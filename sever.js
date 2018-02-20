var http = require('http');
var url = require('url');

/*var onRequest = function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request to Server");
    route(pathname);
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Hello Node");
    response.end();
}*/
/*function startServer(route) {
    http.createServer(onRequest).listen(8888);
}*/
function startServer(route, handle) {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        var reviewData = "";
        console.log("Request to Server");
        request.setEncoding("UTF-8")
        request.addListener("data", function (chunk) {
            reviewData += chunk;
        });
        request.addListener("end", function () {
            route(handle, pathname, response, reviewData);
        })
        //  route(handle, pathname, response);
        /* response.writeHead(200, {
             "Content-Type": "text/plain"
         });
         response.write("Hello Node");
         response.end();*/
    }
    http.createServer(onRequest).listen(8888);
}


console.log("Server started @8888");

exports.startServer = startServer;