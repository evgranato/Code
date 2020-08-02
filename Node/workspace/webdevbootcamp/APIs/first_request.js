// const express = require('express');
// const app = express();
const axios = require("axios");


// axios.get('https://jsonplaceholder.typicode.com/todos', function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//         var parsedData= JSON.parse(body);
//         console.log(parsedData);
//     }
// });

// COLT USED JSON.parse TO PARSE THE STRING RETURNED INTO A JAVASCRIPT OBJECT

axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
    // handle success
    var data = response.data
    for(var i = 0; i < data.length; i++) {
      console.log(data[i].email)
    };
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



// (async () => {
//     try{
//     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(response.data)
//     } catch(err) {
//         console.log(err);
//     }
// })()

// app.listen(3000, function() {
//     console.log("server started");
// })