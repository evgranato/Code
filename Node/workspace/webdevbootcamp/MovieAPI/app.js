var express = require("express");
var app = express();
var axios = require("axios");

axios.get('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb')
    .then(function (response) {
        // handle success
        var data = response.data
        for(var i = 0; i < data.length; i++) {
          console.log(data)
        };
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });



app.listen(3000, function() {
    console.log("APP SERVER STARTED!!")
})