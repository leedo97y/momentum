/**
 * [input validation concept]
 * 
 * if you want to USE 'input Validation', use 'form tag' FIRST !
 * because 'input validation' ONLY work inside of 'form tag'.
 * you don't have to write addEventListner when using them.
 * 
 * And 'input tag' has submit event inside already by write type "submit" !
 * BUT, using 'form tag' can cause page-reloading when you click btn or submit data.
 * 
 * <Solution>
 * => Prevent this action by using 'event.preventDefault()'
 */



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// UpperCase  = for saving String-Value / unimportant information
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit (event) {
  event.preventDefault(); // this code can prevent page-reloading

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings () {
  const username = localStorage.getItem(USERNAME_KEY)
  greeting.innerText = `Hello ${username} !`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings();
}


/**
 * <Solution>
 * [ submit -> hidding form (function : onLoginSubmit) ]
 * 
 * 1. remove Browser's Default Event
 * 2. save value in username
 * 3. add HTML h1 tag with id "greeting" in emptySpace
 * 4. add class "hidden" in loginForm (js)+ add CSS code too
 * 5. find and save id "greeting" in greeting by querySelector
 * 6. add innerText in greeting with backTic
 * 7. remove class "hidden" in greeting
 * 
 * _______________________________________________________________________________
 * <Strategy - for remember username>
 * [ Remember username by using 'localStorage' ]
 * 
 * 1. use localStorage.setItem(Key, Value) to save localStorage
 * 2. if localStorage has username, show greetings
 * [sol 2] : add innerText in h1 , remove class "hidden" in id "greeting" to show h1
 * 3. if username is null, show form
 * [sol 3] : remove class "hidden" , show form
 * 
 * + some codes are repeat over and over ... -> make function (solution)
 */
