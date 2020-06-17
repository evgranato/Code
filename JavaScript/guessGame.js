let secretNumber = 4;

let num = Number(prompt("Guess a number."));

while(num != secretNumber) {
    if (num === secretNumber) {
    alert("You guessed it!")
}

else if (num < secretNumber) {
    alert("Too Low")
}

else {
    alert("Too High")
}
}