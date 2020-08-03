var express = require("express");
var app = express();
var axios = require("axios");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("Home");
});

app.post("/results", function(req, res) {
  var sResults = req.body.sResults;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/results", function(req, res) {
  axios.get('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb')
    .then(function (response) {
        // handle success
        var data = response.data
        res.render("results", {data: data})
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });   
})

app.listen(3000, function() {
    console.log("MOVIE APP SERVER STARTED!!")
})