var button = document.querySelector("button");
var body = document.querySelector("body");

// INITIAL SOLUTION:
// var isPurple = false

// var click = button.addEventListener("click", function() {
//     if(isPurple) {
//         body.style.backgroundColor = "white";
//     }
//     else {
//         body.style.backgroundColor = "purple";
//     }
//     isPurple = !isPurple
// })

// REFACTORED:
var click = button.addEventListener("click", function() {
  body.classList.toggle("purple");
})