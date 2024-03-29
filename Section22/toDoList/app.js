//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");



const app = express();

let items = ["Buy Food", "Eat Food", "Cook Food"];
let workItems = [];

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

// para enrutar los archivos que no esta poniendo en el server, como el css
app.use(express.static("public"));

app.get("/", function(req, res) {
    let day = date.getDay();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});

app.post("/", function(req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");

    }

});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
})

app.post("/work,", function(res, req) {
        let item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work");

    }) +

    app.get("/about",
        function(req, res) {
            res.render("about");
        });