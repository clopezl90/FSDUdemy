//jshint esversion:6

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");

})

app.post("/bmiCalculator", function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight + height;
    res.send("the result of the bmi is " + result);
})






app.listen(3000, function() {
    console.log("Server started on port 3000");
});