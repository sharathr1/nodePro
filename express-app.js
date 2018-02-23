const express = require('express');
const app = express();

/*app.get('/', (req, res) => res.send('Hello World!'));
 */
//res.write('Hello World!')
//res.end()
app.get('/', function (req, res) {
    res.send('Hello World!')
});
app.get('/list', function (req, res) {
    var blocks = ['t', '2', 'rr'];
    res.send(blocks);
});
app.get('/jlist', function (req, res) {
    var blocks = ['t', '2', 'rr'];
    res.json(blocks);
});
app.get('/html', function (req, res) {
    var blocks = "<h1>Sharath R</h1>";
    res.send(blocks);
});

app.get('/app', function (req, res) {
    res.redirect('/');
    //moved temp : 302 header 
    //res.redirect(301, '/');
});


app.listen(8888, () => console.log('Example app listening on port 8888!'));