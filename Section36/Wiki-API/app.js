//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//connect to mongoose
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

//create Schema

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

// request targeting all articles




//express js routing

app.route("/articles")

.get(function(req, res) {
    Article.find({})
        .then(function(foundArticles) {
            res.send(foundArticles)
        })
        .catch(function(err) {
            console.log("error is " + err);
        })
})

.post(function(req, res) {
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })

    newArticle.save();

})

.delete(function(req, res) {
    Article.deleteMany({})
        .then(function() {
            res.send("succesfully deleted")
        })
        .catch(function(err) {
            console.log("error is " + err);
        })


});



// request targeting a specific article

app.route("/articles/:articleTitle")

.get(function(req, res) {


    Article.findOne({ title: req.params.articleTitle })
        .then(function(foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);

            } else {
                res.send("No match found");
            }

        })
        .catch(function(err) {
            console.log("error is " + err);
        })

})

.put(function(req, res) {
    Article.updateOne({ title: req.params.articleTitle }, {
            title: req.body.title,
            content: req.body.content
        })
        .then(function() {

            res.send("succesfully updated");


        })
        .catch(function(err) {
            console.log("error is " + err);
        })
})

.patch(function(req, res) {
    Article.updateOne({ title: req.params.articleTitle }, {
            $set: req.body
        })
        .then(function() {

            res.send("succesfully patched");


        })
        .catch(function(err) {
            console.log("error is " + err);
        })


})

.delete(function(req, res) {
    Article.deleteOne({ title: req.params.articleTitle })
        .then(function() {

            res.send("succesfully deleted");


        })
        .catch(function(err) {
            console.log("error is " + err);
        })


})







/* app.get("/articles", function(req, res) {
    Article.find({})
        .then(function(foundArticles) {
            res.send(foundArticles)
        })
        .catch(function(err) {
            console.log("error is " + err);
        })
})


app.post("/articles", function(req, res) {
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })

    newArticle.save();

})

app.delete("/articles", function(req, res) {
    Article.deleteMany({})
        .then(function() {
            res.send("succesfully deleted")
        })
        .catch(function(err) {
            console.log("error is " + err);
        })


}) */

app.listen(3000, function() {
    console.log("Server started on port 3000");
});