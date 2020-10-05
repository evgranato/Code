var express     = require("express"),
bodyParser      = require("body-parser"),
mongoose        = require("mongoose"),
methodOverride  = require("method-override");
expressSanitizer = require("express-sanitizer"),
app             = express();

//MONGOOSE CONFIG
mongoose.connect("mongodb://localhost/F3Austin_app", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

//MONGOOSE MODEL CONFIG
var bbSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var BB = mongoose.model("BB", bbSchema);

// BB.create({
//     title: "Test Backblast",
//     image: "https://i0.wp.com/happygodoodle.com/wp-content/uploads/2019/03/two-goldendoodle-dogs.jpg?ssl=1",
//     body: "THIS IS A BACKBLAST"
// });

//RESTFUL ROUTES
//INDEX
app.get("/", function(req, res) {
    res.redirect("/backblasts");
});

app.get("/backblasts", function(req, res) {
    BB.find({}, function(err, bb){
        if(err){
            console.log("ERROR!");
        } else {
            res.render("index", {bb: bb});
        }
    });
});
//NEW ROUTE
app.get("/backblasts/new", function(req, res){
    res.render("new")
});
//CREATE ROUTE
app.post("/backblasts", function(req, res){
    req.body.bb.body = req.sanitize(req.body.bb.body);
    BB.create(req.body.bb, function(err, newBb){
        if(err){
            res.render("new");
        } else{
            res.redirect("/backblasts");
        }
    })
});
//SHOW ROUTE
app.get("/backblasts/:id", function(req, res){
    BB.findById(req.params.id, function(err, foundBb){
        if(err){
            res.redirect("/backblasts");
        } else{
            res.render("show", {bb: foundBb});
        }
    })
});

//EDIT ROUTE
app.get("/backblasts/:id/edit", function(req, res){
    BB.findById(req.params.id, function(err, foundBb){
        if(err){
            res.redirect("/backblasts");
        } else{
            res.render("edit", {bb: foundBb});
        }
    });
});

//UPDATE ROUTE
app.put("/backblasts/:id", function(req, res){
    req.body.bb.body = req.sanitize(req.body.bb.body);
    BB.findByIdAndUpdate(req.params.id, req.body.bb, function(err, updatedBb){
        if(err){
            res.redirect("/backblasts");
        } else{
            res.redirect("/backblasts/" + req.params.id);
        }
    })
});

//DELETE ROUTE
app.delete("/backblasts/:id", function(req, res){
    BB.findByIdAndRemove(req.params.id, function(err, deletedBb){
        if(err){
            res.redirect("/backblasts");
        } else{
            res.redirect("/backblasts");
        }
    });
});

app.listen(3000, function() {
    console.log("F3 App Runnning");
});