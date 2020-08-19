var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Granite Hill", image: "https://blog-assets.thedyrt.com/uploads/2018/06/freecampingspot-2000x1120.jpg"},
        {name: "Mountain Goat's Rest", image: "https://i.insider.com/5ed13edd988ee326725f1526?width=1100&format=jpeg&auto=webp"}
    ]

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function() {
    console.log("YelpCamp Server Running")
});