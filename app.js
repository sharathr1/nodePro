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
//http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#.WkzgR_mWbDc
const pg = require('pg')
const conString = 'postgres://postgres:admin@localhost:5432/postgres' // make sure to match your own database's credentials

pg.connect(conString, function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  client.query('SELECT $1::varchar AS my_first_query', ['postgres'], function (err, result) {
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    console.log(result.rows[0])
    process.exit(0)
  })
})