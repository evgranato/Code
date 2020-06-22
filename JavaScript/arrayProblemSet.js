// function printReverse(arr) {
//     for( let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }

// function printReverse(arr) {
//     arr.forEach(function(rev) {
//         console.log(arr.pop())
//     })
// }

// function isUniform(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[0]) {
//         var answ = "true"}
//         else {
//          var answ = 'false'};
//     }
//     if(answ === 'true') {
//         console.log("true")
//     }
//     else {
//         console.log('false')
//     }
// }

// function isUniform(arr) {
//     var first = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] != first) {
//         return false;
//     }
// }
//     return true;
// }

// function sumArray(arr) {
//     var result = 0;
//     for (var i = 0; i < arr.length; i++) {
//     result += arr[i];
//     }
//     console.log(result)
// }

function max(arr) {
    var element = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > element) {
            element = arr[i];
        }
    }
    return element
}