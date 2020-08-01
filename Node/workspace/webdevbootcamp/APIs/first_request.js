// const express = require('express');
// const app = express();
const axios = require("axios");

// axios.get('https://jsonplaceholder.typicode.com/todos', function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//         var parsedData= JSON.parse(body);
//         console.log(parsedData);
//     }
// });

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
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