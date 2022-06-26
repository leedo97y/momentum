//const h1 = document.getElementById("title");
const h1 = document.querySelector("h1"); 
const btn = document.querySelector("button");

const defaultTitle = "Got you!";
const defaultColor = "blue";


h1.innerText = defaultTitle;
h1.style.color = defaultColor;




function handleClickBtn () {
  alert("Hello there! i'm now working!");
}

function handleMouseEnter () {
  h1.innerText = "I'm here ! ";
}


function ChangeTitleColor () {
  h1.style.color = "orange";
}

function handleMouseLeave () {
  h1.innerText = "I'm gone ! ";
  h1.style.color = defaultColor;
}

function handleWindowResize () {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy () {
  alert("copier!");
}

function handleWindowOffline () {
  alert("SOS no WIFI!");
}

function handleWindowOnline () {
  alert("we're SAFE!! ONLINE now!");
}


btn.addEventListener("click", handleClickBtn); 
h1.addEventListener("mouseenter", handleMouseEnter); // title.onmouseenter = handleMouseEnter
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("click", ChangeTitleColor);

window.addEventListener("resize", handleWindowResize); // You shold resize, then it work !
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);