// .text()
// $("h1").text("JQuery Rocks")

// $("li:nth-of-type(2)").text("testing")

// $("li").text("Colt's dog is adorable")

// .html()
// $("ul").html("<li>I Hacked your UL!</li><li>Rusty is still adorable</li><li>Work it</li>")

// .attr()
// console.log($("img").css("width"))
$("img").css("width", "200px")
// $("img").attr("src", "https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg")

// $("input").attr("type", "checkbox")

// $("img:nth-of-type(1)").attr("src", "https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg")
// .last()
// $("img").last().attr("src", "https://live.staticflickr.com/2418/2243463214_f32ab004af_b.jpg")

// .val()
// $("input").val()

// .addClass(), .removeClass(), .toggleClass()
$("h1").addClass("correct")
$("h1").removeClass("correct")
$("li").addClass("wrong")
$("li").removeClass("wrong")
$("li").addClass("correct")
$("li").toggleClass("correct")
$("li").first().toggleClass("done")