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
    var dbres = [];

    /*    var response = new Inventory(_id, item, qty, size, status, instock);
     */
    console.log("Calling DB");

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testmangodb");
        /*   dbo.collection("inventory").findOne({}, function (err, result) {
               if (err) throw err;
               console.log(result);
               dbres = result;
               res.json(dbres);
           });*/
        dbo.collection("inventory").find({
            "qty": 50
        }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            dbres = result;
            var invList = [];
            invList.push(new Inventory());
            console.log(invList);
            res.json(dbres);
        });
        db.close();
    });


    console.log("completed DB query");
});
app.listen(8888, () => console.log('Example app listening on port 8888!'));

function size(h, w, uom) {
    // always initialize all instance properties
    this.h = h;
    this.w = w;
    this.uom = uom;
}

function Size(h, w, uom) {
    // always initialize all instance properties
    this.h = h;
    this.w = w;
    this.uom = uom;
}

function Size() {
    // always initialize all instance properties
    this.h = null;
    this.w = null;
    this.uom = null;
}

function Inventory() {
    // always initialize all instance properties
    this._id = null;
    this.item = null;
    this.qty = null;
    this.size = new Size();
    this.status = null;
}
// class methods