{
	"knownSymbols": {}
}var querString = require("querystring");

function home(http, response) {
    console.log("Executing for Home ")
    // response.redirect('./index.html');
    //    response.sendfile('./index.html');
    var html = '<html>' +
        '<meta charset="UTF-8">' +
        '<body>' +
        '<h3>Home Page.</h3>' +
        '<form action="/review" method ="post">' +
        '<textarea name="text" rows="20" cols="60">' +
        '</textarea>' +
        '<input type="submit" value ="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';
    sucesshtml(html, response);
}

function review(http, response, reviewData) {
    console.log("Executing for review ")
    var html = '<html>' +
        '<meta charset="UTF-8">' +
        '<body>' +
        '<h3> Data Posted :: ' + querString.parse(reviewData).text + '</h3>'
    '</body>' +
    '</html>';
    sucesshtml(html, response)
}

function notFound(response) {
    console.log("Executing for notFound");
    var html = '<html>' +
        '<meta charset="UTF-8">' +
        '<body>' +
        '<h3>404 :Not Found.</h3>' +
        '</body>' +
        '</html>';
    notfound(html, response);

}

function notfound(html, response) {
    response.writeHead(404, {
        "Content-Type": "text/html"
    });
    response.write(html);
    response.end();
}

function sucesshtml(html, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(html);
    response.end();
}
exports.home = home;
exports.review = review;
exports.notFound = notFound;