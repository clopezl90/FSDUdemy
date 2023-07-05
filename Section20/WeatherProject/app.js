const express = require("express");
const https = require("node:https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res) {

    const query = req.body.cityName;
    const apiKey = "26bcc039740372dd27a86d2eeae9548d";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=metric";

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(weatherData.weather[0].description);
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>Description is  " + weatherData.weather[0].description + "</p> ");
            res.write("<h1>Temperature in " + query + " is  + " + temp + "</h1> ");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })

    })

})

app.listen(3000, function() {
    console.log("server running in port 3000");

})


/* const query = "lima"
    const apiKey = "26bcc039740372dd27a86d2eeae9548d";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + " &units=" + units;

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(weatherData.weather[0].description);
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>Description is  + " + weatherData.weather[0].description + "</p> ");
            res.write('<h1>Temperature is  + ' + temp + "</h1> ");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })

    }) */