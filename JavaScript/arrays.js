// window.setTimeout(function() {
//     // put all of your JS code from the lecture here
//   }, 500);
let todo = [];

let startTodo = prompt("What would you like to do?");

while(startTodo !== "quit") {
if(startTodo === "new") {
   let nTodo = prompt("New Todo: ");
   todo.push(nTodo);
}
else if(startTodo === "list") {
   alert(todo);
}
startTodo = prompt("What would you like to do?");
}
alert("Ok, You Quit The App");



