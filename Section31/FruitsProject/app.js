//jshint esversion:6
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "no name added"]
    },

    rating: {
        type: Number,
        min: 1,
        max: 10

    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

    rating: 7,
    review: "very nice"
});




//fruit.save();

//read



Fruit.find()
    .then(function(fruits) {
        //mongoose.connection.close();


        fruits.forEach(function(fruit) {
            console.log(fruit.name);

        })


    })
    .catch(function(err) {

        console.log(err);
    })



Fruit.deleteOne({ _id: "645dc5de37e2cc48e8a5c01" }, )
    .then(function() {
        console.log("success deleted");


    })
    .catch(function(err) {

        console.log("error is " + err);
    })

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,

});

const People = mongoose.model("People", peopleSchema);

const people = new People({
    name: "Cris",
    age: 37
});


//people.save();