const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// create array
const toDos = [];

function savedTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// form can make page-reloading So, prevent default !

function handleTodoSumbit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // save the value
  todoInput.value = ""; // empty the value
  toDos.push(newTodo);
  paintTodo(newTodo);
  savedTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li"); // create li
  //
  const span = document.createElement("span"); // create span
  span.innerText = newTodo;
  //
  const button = document.createElement("button"); // create button
  button.innerText = "✘";
  button.addEventListener("click", deleteTodo);
  //
  li.appendChild(span); // using appendChild to turn span to li's child
  li.appendChild(button);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const deleteLi = event.target.parentElement.innerText;
  // target is html element "clicked"
  // button's parentElement is li
  deleteLi.remove();
  // click button, remove li
}

todoForm.addEventListener("submit", handleTodoSumbit);

const savedTodo = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((item) => console.log("this is the turn of", item));
}

/**
 * [ Functions ]
 *
 * 1. delete page-reloading
 * 2. everytime press Enter, refresh Input Box
 * 3. remember values that I write
 * 4. make a list by using the remembered values
 *
 *
 * [ Solutions / Concepts ]
 *
 * add submit event
 * prevent default action
 * find value
 * create paintTodo function
 * add html element li, span
 * revise span inside of li (li - span)
 * add innerText by saved value to span
 * append li to todoList (ul - li)
 *
 *
 *
 * if you press Enter with empty space, It doesn't work -> input has "required"
 *
 * form - input - ul - li - span
 * = li, span made by JS file with createElement()
 * = span is li's child ( using appendChild() )
 *
 *
 * problem 1.
 * if you refresh the page, To-Do is gone
 * =>
 *
 * problem 2-1.
 * can't delete ONE in the list
 * => make delete button inside : button should be after the span
 *
 * problem 2-2.
 * make delete function, but still don't know which button is clicked
 *
 *
 */
