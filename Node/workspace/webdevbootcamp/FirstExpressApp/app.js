var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!")
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("SOMEONE MADE A GET REQUEST TO /DOG")
    res.send("MEOW!")
});

app.get("/r/:subredditName", function(req, res) {
    var subReddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subReddit.toUpperCase() + " SUBREDDIT!");
})

app.get("*" , function(req, res){
    res.send("You Are A Star!")
});

// Tell Express to listen for requests (start server)

//(process.env.PORT, process.env.IP) for goorm
app.listen(3000, function() {
    console.log("SERVER HAS STARTED")
});

// RUN localhost:3000 in browser to access the app