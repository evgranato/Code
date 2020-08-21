var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
var campgrounds = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Granite Hill", image: "https://blog-assets.thedyrt.com/uploads/2018/06/freecampingspot-2000x1120.jpg"},
    {name: "Mountain Goat's Rest", image: "https://i.insider.com/5ed13edd988ee326725f1526?width=1100&format=jpeg&auto=webp"}
];

app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function() {
    console.log("YelpCamp Server Running")
});