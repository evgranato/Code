$("h1").css("width", "300px");

// click()
// $("h1").click(function() {
//     alert("H1 Clicked")
// });
// $("button").click(function() {
//     var text = $(this).text();
//     console.log("You Clicked: " + text);
//     $(this).css("background-color", "pink");
// })

// keypress()
// $("input").keypress(function(evnet) {
//     if(event.which ===13) {
//         alert("YOU HIT ENTER")
//     }
//     else {
//         console.log("NOT ENTER")
//     }
// })

// on()
$("input").on("keypress", function(evnet) {
    if(event.which ===13) {
        alert("YOU HIT ENTER")
    }
    else {
        console.log("NOT ENTER")
    }
})

$("h1").on("click", function() {
    $(this).css("color", "purple");
})

// $("h1").on("click", function() {
//     $(this).css("color", "black");
// })

$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
})
$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
})