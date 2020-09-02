var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

//Schema Setup//
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({name: "Granite Hill", image: "https://blog-assets.thedyrt.com/uploads/2018/06/freecampingspot-2000x1120.jpg"
//                 }, function(err, campground){
//                     if (err){
//                         console.log(err)
//                     } else {
//                         console.log("NEWLY CREATED CAMPGROUND");
//                         console.log(campground);
//                     }
//     })

var campgrounds = [

    {name: "Mountain Goat's Rest", image: "https://i.insider.com/5ed13edd988ee326725f1526?width=1100&format=jpeg&auto=webp"}
];

app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            //res.render("campgrounds", {campgrounds:campgrounds})
            res.render("campgrounds", {campgrounds:allCampgrounds})
        }
})});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function() {
    console.log("YelpCamp Server Running")
});