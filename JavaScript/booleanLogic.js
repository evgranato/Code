let age = prompt("How old are you?");

if (age == 21) {
    console.log("Happy 21st Birthday!")
}

else if (age < 0) {
    console.log("ERROR, Your number is negative.")
}

else if (age % 2 != 0) {
    console.log("Your age is odd")
}

else if (age % 0 == 0) {
    console.log("Perfect square!")
}

else if (age < 21 && age >= 18 ) {
    console.log("You are too young to drink, but you can enter.")
}

else if (age < 19) {
    console.log("Go home young'in.")
}

else {
    console.log("COME ON IN BUDDY!")
}
