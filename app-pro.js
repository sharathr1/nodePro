var http = require('http');
var server = require('./sever');
var routes = require('./router');
var handler = require('./handler');

var handle = {}; // handling Key value for routing
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/review"] = handler.review;
handle["/notFound"] = handler.notFound;

server.startServer(http, routes.route, handle);