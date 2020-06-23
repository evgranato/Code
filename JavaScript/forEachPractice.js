var colors = ["red", "orange", "yellow", "green"];

// colors.forEach(function(color) {
//     console.log(color);
// });

// function myForEach(arr, func) {
//     //Loop through array
//     for(var i = 0; i < arr.length; i++) {
//     //call func for each item in array
//     func(arr[i]);
//     }
// };

function myForEach(arr, func) {
    //Loop through array
    for(var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
    }
};

Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

friends.myForEach(function(name) {
    console.log("I love " + name);
});