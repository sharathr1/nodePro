function route(http, handle, pathname, response, reviewData) {
    console.log("Route for ", pathname);
    if (typeof handle[pathname] === "function") {
        console.log("Handler found");
        handle[pathname](http, response, reviewData);
    } else {
        console.log("No Handler found");
        handle["/notFound"](response);
    }
}
exports.route = route;