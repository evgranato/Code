var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var games = document.getElementById("games");
var gamesDisplay = document.getElementById("numGames")

var player1Score = 0;
var player2Score = 0;
var playTo = 5;
var gameOver = false;

games.addEventListener("change", function() {
    gamesDisplay.textContent = games.value;
    playTo = Number(games.value);
    resetting();
})

player1.addEventListener("click", function() {
    if(!gameOver) {
    player1Score ++;
    if(player1Score === playTo) {
        p1Display.classList.add("win")
        gameOver = true;
    }
    p1Display.textContent = player1Score;
    }
})
    
player2.addEventListener("click", function() {
    if(!gameOver) {
    player2Score ++;
    if(player2Score === playTo) {
        p2Display.classList.add("win")
        gameOver = true;
    }
    p2Display.textContent = player2Score;
    }
})

reset.addEventListener("click", function() {
    resetting();
})

function resetting (){
    player1Score = 0;
    player2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("win");
    p2Display.classList.remove("win");
    gameOver = false;
}