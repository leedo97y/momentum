const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginBtnClick () {
  console.dir(loginInput);
  console.log("click!!!");
}


loginButton.addEventListener("click", onLoginBtnClick);