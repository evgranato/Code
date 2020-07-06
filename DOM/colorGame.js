// FIRST COLOR ARRAY:
//  var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// ];

//BEFORE REFACTOR:

// var numSquares = 6;
// var colors = generateRandomColors(numSquares);
// var squares = document.querySelectorAll(".square");
// var pickedColor = pickColor();
// var colorDisplay = document.getElementById("pickedColor");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.getElementById("reset");
// var easyButton = document.getElementById("easy");
// var hardButton = document.getElementById("hard");

// colorDisplay.textContent = pickedColor;

// easyButton.addEventListener("click", function() {
//     hardButton.classList.remove("selected");
//     easyButton.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardButton.addEventListener("click", function() {
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

// resetButton.addEventListener("click", function() {
//     //GENERATE ALL NEW COLORS
//     colors = generateRandomColors(numSquares);
//     //PICK A NEW RANDOM COLOR FROM ARRAY
//     pickedColor = pickColor();
//     //CHANGE COLOR DISPLAY TO MATCH PICKED COLOR
//     colorDisplay.textContent = pickedColor;
//     this.textContent = "New Colors"
//     //CHANGE COLORS OF SQUARES
//     for(var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "steelblue";
//     messageDisplay.textContent = ""
// })

// for(var i = 0; i < squares.length; i++) {
//     //ADD INITIAL COLORS TO SQURES
//     squares[i].style.backgroundColor = colors[i];
//     //ADD CLICK LISTENER TO SQUARES
//     squares[i].addEventListener("click", function() {
//         //GRAB COLOR OF CLICKED SQUARE
//         var clickedColor = this.style.backgroundColor;
//         //COMPARE COLOR TO PICKED COLOR
//         if(clickedColor === pickedColor) {
//             messageDisplay.textContent = "Correct!";
//             resetButton.textContent = "Play Again?"
//             changecolors(clickedColor);
//             h1.style.backgroundColor = pickedColor;

//         }
//         else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Try Again";
//         }
//     })
// }

// function changecolors(color) {
//     //LOOP THROUGH ALL SQUARES
//     for(var i = 0; i < squares.length; i++) {
//         //CHANGE EACH COLOR TO MATCH GIVEN COLOR
//         squares[i].style.backgroundColor = color;
//     }
// }

// function pickColor() {
//     var random = Math.floor(Math.random() * colors.length);
//     return colors[random];
// }

// function generateRandomColors(num) {
//     //MAKE AN ARRAY
//     var arr =[];
//     //REPEAT NUM TIMES
//     for(var i = 0; i < num; i++) {
//         //GET RANDOM COLOR AND PUSH TO ARRAY
//         arr.push(randomColor())
//     }
//     //RETURN ARRAY
//     return arr;
// }

// function randomColor() {
//     //PICK A 'RED' FROM 0-255
//     var r = Math.floor(Math.random() * 256);
//     //PICK A 'GREEN' FROM 0-255
//     var g = Math.floor(Math.random() * 256);
//     //PICK A 'BLUE' FROM 0-255
//     var b = Math.floor(Math.random() * 256);
//     return "rgb(" + r + ", " + g + ", " + b + ")";
// }

// function resetGame() {
//     generateRandomColors(numSquares);
// }

//AFTER REFACTOR: 

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("pickedColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //BELOW DOES SAME AS COMMENTED OUT CODE BELOW IT, BUT IS SHORTER. (Turnery operator?)
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // if(this.textContent === "Easy") {
            //     numSquares = 3;
            // }
            // else {
            //     numSquares = 6;
            // }
            resetting();
        });
    }
}
function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            //GRAB COLOR OF CLICKED SQUARE
            var clickedColor = this.style.backgroundColor;
            //COMPARE COLOR TO PICKED COLOR
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changecolors(clickedColor);
                h1.style.backgroundColor = pickedColor;
    
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    };
    resetting();
}

function resetting() {
    //GENERATE ALL NEW COLORS
    colors = generateRandomColors(numSquares);
    //PICK A NEW RANDOM COLOR FROM ARRAY
    pickedColor = pickColor();
    //CHANGE COLOR DISPLAY TO MATCH PICKED COLOR
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    //CHANGE COLORS OF SQUARES
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        } else {
          squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    //GET RID OF CORRECT OR TRY AGAIN
    messageDisplay.textContent = ""
}

resetButton.addEventListener("click", function() {
   resetting();
})

function changecolors(color) {
    //LOOP THROUGH ALL SQUARES
    for(var i = 0; i < squares.length; i++) {
        //CHANGE EACH COLOR TO MATCH GIVEN COLOR
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //MAKE AN ARRAY
    var arr =[];
    //REPEAT NUM TIMES
    for(var i = 0; i < num; i++) {
        //GET RANDOM COLOR AND PUSH TO ARRAY
        arr.push(randomColor())
    }
    //RETURN ARRAY
    return arr;
}

function randomColor() {
    //PICK A 'RED' FROM 0-255
    var r = Math.floor(Math.random() * 256);
    //PICK A 'GREEN' FROM 0-255
    var g = Math.floor(Math.random() * 256);
    //PICK A 'BLUE' FROM 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}