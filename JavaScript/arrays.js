window.setTimeout(function() {
   //  put all of your JS code from the lecture here

let todos = [];

let startTodo = prompt("What would you like to do?");

while(startTodo !== "quit") {
   if(startTodo === "new") {
      addTodo();
}
   else if(startTodo === "list") {
      listTodos();
}
   else if(startTodo === "delete") {
      deleteTodo();
}
startTodo = prompt("What would you like to do?");
}
alert("Ok, You Quit The App");

function listTodos() {
   console.log("***********");
   todos.forEach(function(todo, index) {
   alert(index + ": " + todo);
   })
   }
function addTodo() {
   let nTodo = prompt("New Todo: ");
   todos.push(nTodo);
   alert(nTodo + " added to your list!");
}

function deleteTodo() {
   let itemNum = prompt("What index Todo would you like to delete?");
   todos.splice(itemNum, 1);
   alert("Deleted Todo");
}

}, 500);

