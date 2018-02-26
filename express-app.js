const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;

//CSS folder 
/*app.get('/css/*', function (req, res) {
    res.sendFile(__dirname + "/css/style.css")
});*/
app.use(express.static("public"));



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
app.get('/index', function (req, res) {
    res.sendFile(__dirname + "/index.html")
    //moved temp : 302 header 
    //res.redirect(301, '/');
});




var url = "mongodb://localhost:27017/";

app.get('/db', function (req, res) {
    var dbres;
    console.log("Calling DB");

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testmangodb");
        dbo.collection("teams").findOne({}, function (err, result) {
            if (err) throw err;
            console.log(result);
            dbres = result;

            res.json(dbres);

        });
        db.close();
    });
    console.log("completed DB query");
});
app.listen(8888, () => console.log('Example app listening on port 8888!'));