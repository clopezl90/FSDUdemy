//jshint esversion:6

require('dotenv').config();
console.log(process.env);
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;
const mongoose = require("mongoose");
const md5 = require("md5");


const { Schema } = require('mongoose');
//var Schema = mongoose.Schema;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB", { useNewURLParser: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});




const User = new mongoose.model("User", userSchema);


app.get("/", function(req, res) {
    res.render("home");

})

app.get("/login", function(req, res) {
    res.render("login");

})
app.get("/register", function(req, res) {
    res.render("register");

})

app.post("/register", function(req, res) {
    const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password)
    });

    newUser.save()
        .then(function() {
            res.render("secrets")

        })
        .catch(function(err) {
            console.log(err);

        })

})

app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ email: username })
        .then(function(foundUser) {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("secrets");
                    console.log("loggeado");
                }
            }

        })
        .catch(function(err) {
            console.log(err);

        })




})



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});