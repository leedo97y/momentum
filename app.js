//const h1 = document.getElementById("title");
const h1 = document.querySelector("h1"); 



function handleTitleClick () {
  const clickedClass = "clicked"; // DO NOT USE raw string -> minimize error

  // 기존의 className을 바꾸지 않고 classList의 내장함수인 add와 remove를 이용해서 바꿀 수 있음
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
  // => 이 모든 코드가 한줄의 코드로 해결될 수 있음
  // h1.classList.toggle(clickedClass);
  // toggle? = classList에 className이 이미 있는지 파악해서 없으면 추가, 있으면 삭제해줌




  // if (h1.className === clickedClass) {
  //   h1.className = "";
  //   
  //   // active 상태이면 tomato 색을 입히게 css에서 컬러 조정함
  //   // 따라서, active 상태가 아니라면 원래의 색으로 돌아갈 수 있음 => className을 비워줌
  //
  // } else {
  //   h1.className = clickedClass;
  // }



  // const currentColor = h1.style.color; 
  // let newColor; // 빈 변수에 바뀐 새로운 색을 저장
  // if (currentColor === "blue") {
  //   newColor = "tomato";
  // } else {
  //   newColor = "blue";
  // }
  // h1.style.color = newColor;
}




h1.addEventListener("click", handleTitleClick);








/*
const btn = document.querySelector("button");



  function handleClickBtn () {
    alert("Hello there! i'm now working!");
  }

  function handleMouseEnter () {
    h1.innerText = "I'm here ! ";
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

  window.addEventListener("resize", handleWindowResize); // You shold resize, then it work !
  window.addEventListener("copy", handleWindowCopy);
  window.addEventListener("offline", handleWindowOffline);
  window.addEventListener("online", handleWindowOnline);
  
 */
