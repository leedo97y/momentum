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

\*\* 함수 작성 onLoginSubmit, addEventListner - click시 함수 실행으로 작성

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
function paintGreetings(username) {
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

<br>

---

# STEP2. Clock

## Solution for Clock

### Problem 1. Clock delay

: 시계가 페이지 로딩 후 바로 나타나지 않고 1초 후에 나타남 = 딜레이가 존재

[ 해결방안 ]

```js
getClock();
setInterval(getClock, 1000);
```

=> setInterval 함수보다 시계 함수를 먼저 불러와 준다.

### Problem 2. turn 1s to 01s

: 시 분 초의 default 값은 0s, 1s, 2s, ... 58s, 59s 인데 00s, 01s, 02s, ... 59s 로 바꾸고 싶음

[ 해결방안 ]

```js
"1".padStart(2, "0");
// 01
```

=> 하지만 padStart는 String만 바꿔줄 수 있다.

그러나 시, 분, 초를 구할때 쓰는 Date().get시분초() 는 number이다. 따라서, String 변환이 필요하다.

```js
const date = new Date();

const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
```

<br>

---

## Clock Code Review

\*\* setInterval, setTimeout, new Date()

[ new Date() ]

: get~과 함꼐쓰면 날짜와 시간을 구할 수 있음. 위 코드 참고

<br>

[ setInterval(function, miliseconds) ]

: 함수를 몇 초 간격으로 호출할 것인지 정할 수 있는 함수 (다회성, 멈추지 않음)

<br>

[ setTimeout(function, miliseconds) ]

: 함수를 몇 초후에 호출할 것인지 정할 수 있는 함수 (일회성)

<br>
<br>

1. HTML에서 querySelector를 이용해 clock 부분을 가져온다.

```js
const clock = document.querySelector("h2#clock");
```

<br>

2. 함수 getClock 작성

3. new Date()를 변수 date에 저장

4. getHours로 시간 구하고 String으로 변환

5. getMinutes로 분 구하고 String으로 변환

6. getSeconds로 초 구하고 String으로 변환

7. 구해놓은 각 시,분,초에 padStart 이용해서 바꿔주기

8. clock에 innerText 추가해주기

```js
clock.innerText = `${hours} : ${minutes} : ${seconds}`;
```

9. getClock 함수 호출해주기

10. setInterval을 getClock 함수에 적용시켜주기 (1초 = 1000)

<br>

---

## Clock 전체 리뷰

padStart를 처음 써봤는데, 앞에 문자열만 올 수 있다는 것을 기억해야겠다.

또, setInterval을 이용해 시계의 상태를 조정할 수 있다는 점과 setTimeout과의 차이점을 기억해야겠다.

<br>

---

# STEP3. Quote

## Solution for Quote
