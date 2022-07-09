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

<br>

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
