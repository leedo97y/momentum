# Momentum App

nomadCoder Vanilla JS로 크롬 만들기

<br>

---

# step1. Login Form

## Solution for Submit form

: form tag는 그 자체로 submit event를 가진다. = page-reloading 문제 발생

= 브라우저의 default event를 remove 해주는 코드인 event.preventDefault();를 해주면 된다.

<br>

---
## Login Form code review

** 함수 작성 onLoginSubmit, addEventListner - click시 함수 실행으로 작성

event를 argument로 받고 있고, event는 이벤트 리스너를 받아오는 함수의 기본 argument로 쓰인다.

1. 페이지 리로딩을 피하기 위해 preventDefault를 해준다.

2. loginForm, loginInput을 변수로 지정해준다.
-> querySelector로 아이디 찾아서 부분 가져오기

3. username 변수 작성 - loginInput의 value라는 요소에 username이 저장되기 때문

4. localStorage에 username을 넣어주기 (setItem) - key, value 순으로

5. loginForm의 classList에 "hidden" 이라는 class 추가 
-> 그냥 HTML의 form 태그에 class "hidden" 바로 추가 (if else 작성 후 수정)

```js
/*
-> hidden 이 붙으면 숨겨지고, 붙지 않으면 보이게 CSS 작성 후 추가 (display : none)
*/ 

```

6. HTML에 h1 태그 작성, class "hidden" 지정, id "greeting" 지정

7. greeting 변수 지정해주기
-> querySelector를 이용하여 아이디 가져오기

8. greeting에 innerText 넣어주기

9. greeting의 classList에서 "hidden"을 제거해주기 

```js
/*
username을 기억해서 한번 username 등록 시, greeting h1 tag의 내용을 보여주는 것이 목표 -> 나와야 함
*/
```

10. if else 코드 작성하기

```js
const HIDDEN_CLASSNAME = "hidden";

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText(`Hello ${savedUsername} !`);
}
```
savedUsername 이라는 변수에 localStorage에 저장된 username을 가져온다.

-> 여기서 greeting ~ 코드는 반복되므로 함수로 따로 작성해준다.

<br>

```js


function paintGreetings (username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText(`Hello ${username} !`);
}

if (savedUsername === null) {
  // show loginForm
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show greetings
  paintGreetings(savedUsername);
}

```

-> greeting 코드를 따로 배서 작성 후 함수 실행코드를 else 부분에 적어준다.

[전체 설명] 

if 부분은 localStorage에 저장된 username이 null 즉, 존재하지 않는다면 loginForm을 보여주는 코드이고 else 부분은 greeting 부분을 보여주는 코드이다.

<br>

---

## Login form 전체 리뷰

보여줄 부분과 보여지지 않을 부분 등 미리 구상해놔야 코드 작성할때 세세한 부분까지 다 고려해서 작성할 수 있을 것 같다.