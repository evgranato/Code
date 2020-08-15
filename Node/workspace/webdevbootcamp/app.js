var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Granite Hill", image: "https://pixabay.com/get/53e4d1424b56a814f1dc84609620367d1c3ed9e04e507440722c73d1914ac7_340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e507440722c73d1914ac7_340.jpg"}
    ]

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function() {
    console.log("YelpCamp Server Running")
});