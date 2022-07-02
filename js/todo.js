const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// create array
let toDos = [];
// want to update array -> change 'const' to 'let'
// and turn 'toDos' to 'parsedTodos( = old todos )'

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// form can make page-reloading So, prevent default !

function handleTodoSumbit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // save the value
  todoInput.value = ""; // empty the value
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; // 형식을 바꿈
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li"); // create li
  li.id = newTodo.id; // add id in 'li'
  //
  const span = document.createElement("span"); // create span
  span.innerText = newTodo.text;
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
  const li = event.target.parentElement;
  // target is html element "clicked"
  // button's parentElement is li
  li.remove(); // 아이템 지우기
  console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // li.id = String, toDo.id = Number
  // ->  So, none of them is removed = use parseInt(li.id) turn string to number
  saveTodos();
  // you must remember that call saveTodos one more time
  // 지워지고 남은 아이템 보여주기
}

todoForm.addEventListener("submit", handleTodoSumbit);

const savedTodo = localStorage.getItem(TODOS_KEY);
console.log(saveTodos);
if (savedTodo !== null) {
  const parsedTodos = JSON.parse(savedTodo); // old one
  toDos = parsedTodos;
  // turn toDos old one
  parsedTodos.forEach(paintTodo);
  // excuting every array in parsedTodos
}
// make new array excluding items that you want delete
// = using filter
// filter function can return 'True items', 'False item' is excluded

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
