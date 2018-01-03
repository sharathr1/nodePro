const http = require('http');
var movies = require('./movies');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res) => {
  var a = movies.avatar();
  console.log(a);
  returnSuccessRes('Hello World\n'+a,res);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function returnSuccessRes(obj,res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end(obj + '\nStatus : '+res.statusCode);
}