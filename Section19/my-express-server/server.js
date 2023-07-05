//jshint esversion:6


const { request } = require("express");
const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("<h1> hello world </h1>");

})

app.get("/contact", function(req, res) {
    res.send("contact me");
})

app.get("/about", function(req, res) {
    res.send("This is the Cristian Lopez server jeje");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});