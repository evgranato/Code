var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof, woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var sound = sounds[animal]
    res.send("The " + animal + " says '" + sound + "'")
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word
    var number = Number(req.params.number);
    var result = ""
    for(var i = 0; i < number; i++) {
        result += word + " ";
    };
    res.send(result);
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
});

app.listen(3000, function() {
    console.log("SERVER STARTED!")
});