var express = require("express"),
bodyParser  = require("body-parser"),
mongoose    = require("mongoose"),
app         = express();

//MONGOOSE CONFIG
mongoose.connect("mongodb://localhost/RESTful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://i0.wp.com/happygodoodle.com/wp-content/uploads/2019/03/two-goldendoodle-dogs.jpg?ssl=1",
//     body: "HELLO THIS IS A BLOG POST"
// });

//RESTFUL ROUTES
//INDEX
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});
//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new")
});
//CREATE ROUTE
app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else{
            res.redirect("/blogs");
        }
    })
})



app.listen(3000, function() {
    console.log("Blog App Runnning");
});