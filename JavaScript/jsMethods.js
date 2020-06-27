// var obj = {
//     name: "Chuck",
//     age: 45,
//     isCool: false,
//     friends: ["bob", "tina"],
//     add: function(x,y) {
//         return x + y;
//     }
// }

// var dogSpace = {
//     speak: function() {
//         return "Woof!"
//     }
// }

// var catSpace = {
//     speak: function() {
//         return "Meow!"
//     }
// }

var comments = {
    data: ["Good Job!", "Bye", "Lame..."],
    print: function() {
        this.data.forEach(function(el) {
        console.log(el);
    });
    }
}