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
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({name: "Granite Hill", 
//                     image: "https://blog-assets.thedyrt.com/uploads/2018/06/freecampingspot-2000x1120.jpg",
//                     description: "This is a huge hill, no bathrooms. No water. Beautiful Granite"
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

// INDEX ROUTE - VIEW ITEMS
app.get("/campgrounds", function(req, res) {
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            //res.render("campgrounds", {campgrounds:campgrounds})
            res.render("index", {campgrounds:allCampgrounds})
        }
})});

// CREATE ROUTE - SUBMIT 
app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description}
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

// NEW ROUTE - SHOW FORM
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(3000, function() {
    console.log("YelpCamp Server Running")
});

// SHOW ROUTE - SHOW INFO ABOUT AN ITEM
app.get("/campgrounds/:id", function(req, res){
    // FIND CAMPGROUND WITH PROVIDED ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
    // RENDER SHOW TEMPLATE WITH THAT CAMPGROUND
            res.render("show", {campground: foundCampground});
        }
    });
    
});