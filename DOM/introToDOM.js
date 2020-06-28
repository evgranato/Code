// FIRST LESSON:

//var h1 = document.querySelector("h1");

// h1.style.color = "pink";

// var body = document.querySelector("body");
// var isBlue = false;

// setInterval (function() {
//     if (isBlue) {
//         body.style.background = "white";
//     }
//     else {
//         body.style.background = "#3499db";
//     }
//     isBlue = !isBlue;
// },1000);

// SECOND LESSON

// var tag = document.getElementById("highlight");

// var tags = document.getElementsByClassName("bolded");

// var tags2 = document.getElementsByTagName("li");

var tag = document.querySelector("#highlight");

tag.style.color = "red";

var tags = document.querySelectorAll(".bolded");

tags.style.color = "blue";