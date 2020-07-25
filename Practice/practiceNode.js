// function average(scores) {
// 	var total = 0;
// 	scores.forEach(function(score) {
// 		total += score;
// 	})

// 	var avg = total/scores.length;

// 	return Math.round(avg);
// }

// console.log(average([90,98,89,100,100,86,94]))
// console.log(average([40,65,77,82,80,54,73,63,95,49]))

// CREATING A COUNTER FOR USE IN A SYSTEM. LOGS IN ARRAY. NEED TO FIGURE OUT DATE TO USE AS A USE/DAY TRACKER.

var dailyUse = [];

var button = document.querySelector("button");

button.addEventListener("click", function() {
    dailyUse.push(1);
    countUse();
    console.log(dailyUse)
})

function countUse() {
    var total = 0
    dailyUse.forEach(function (val) {
        total += val;
    })
    dailyUse = []
    dailyUse.push(total);
}