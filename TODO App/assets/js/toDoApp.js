$("ul").on("click", "li", function() {
    $(this).toggleClass("clicked");
}); 

$("ul").on("click", "span",function() {
    $(this).parents("li").fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
}); 

$("input[type='text']").on("keypress", function(event) {
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</ul>");
    }
})

$(".fa-plus").on("click", function() {
    $("input").fadeToggle();
})