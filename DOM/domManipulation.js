//SELECT
// var tag = document.getElementById("highlight");

// //MANIPULATE
// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontSize = "70px";
// tag.style.background = "yellow";
// tag.style.marginTop = "200px";
// tag.style.textAlign = "center";

// var h1 = document.querySelector("h1");

// h1.style.color = "yellow";
// h1.style.border = "5px solid pink";

// var p = document.querySelector("p");

// p.classList.add("big");

// p.classList.remove("big");

// p.classList.toggle("big")
//TOGGLES ON!!!
// p.classList.toggle("big")
//TOGGLES OFF!!!

// p.classList.toggle("done");

// var p = document.getElementsByTagName("p")[0];

// var ul = document.querySelector("ul");

// p.innerHTML;
// SHOWS THE INNER HTML TAGS LIKE THE <STRONG> TAG IN THE <P>

// var link = document.querySelector("a");

// link.setAttribute("href", "www.dogs.com")


// var links = document.querySelectorAll("a");
// for(i = 0; i < links.length; i++) {
//         links[i].setAttribute("href", "http://thedonald.win")}

// DOM EVENTS //

// element.addEventListener(type, function to call)

var button = document.querySelector("button");
var paragraph = document.getElementsByTagName("p")[1]
button.addEventListener("click", function() {
    paragraph.textContent = "SOMEONE CLICKED THE BUTTON!";
})

var lis = document.querySelectorAll("li")

for(i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.setProperty("text-decoration", "line-through")
    })
}
