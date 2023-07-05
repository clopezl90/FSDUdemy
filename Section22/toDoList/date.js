//jshint esversion:6

module.exports.getDate = CallDate;



function CallDate() {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDay = GetDay;

function GetDay() {

    let today = new Date();

    let options = {
        weekday: "long",

    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}

console.log(module.exports);