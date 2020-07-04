// var li = document.querySelector("li");

// li.addEventListener("mouseover", function() {
//     this.classList.toggle("green");
// })

// li.addEventListener("mouseleave", function() {
//     this.classList.toggle("green");
// })

var li2 = document.querySelectorAll("li");

for(i=0; i < li2.length; i++) {
    li2[i].addEventListener("mouseover", function() {
    this.classList.toggle("green");
    })
}

for(i=0; i < li2.length; i++) {
    li2[i].addEventListener("mouseleave", function() {
    this.classList.toggle("green");
    })
}

for(i=0; i < li2.length; i++) {
    li2[i].addEventListener("click", function() {
    this.classList.toggle("done");
    })
}