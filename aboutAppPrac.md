> # Review the Lecture

# variable (변수)

변수는 코드를 간결하고 가시성 있게 만들어 준다.

## const

const는 변수(variable)를 선언할 때 쓰이며, 특징이 있다면 '고정적인' 변수만을 선언한다.
<br>
= constant(상수)를 의미하며, 이는 값이 바뀔 수 없다는 뜻이다. <br>
(can not update)

## let

let은 '변하는' 변수를 선언할 때 쓰인다. 그리고 변수를 생성할때만 let을 앞에 적어주고 쓴다.

```js
let myName = "Doy";
myName = "doyyyy";
```

또한, 변수 값을 업데이트하고 싶을때 쓴다.
<br>
(can upadte)
<br>

> var도 쓰긴 하지만, var을 쓸 경우 변수가 고정적인지 변동하는지 알 수 없다.

<br>

## CamelCase

긴 변수를 작성할때 소문자 + 대문자로 아래처럼 작성한다.
<br>
이것을 CamelCase라고 한다.

```js
const niceToMeetYou = 1;
```

<br>

---

<br>

# Boolean type

true, false로 나타남.
<br>

> `false` != `"false"`

전자는 boolean type, 후자는 문자열이다.

<br>

---

<br>

# Undefined / Null

## Undefined

undefined는 말 그대로
<span style="color:tomato"> 정의되지 않았다 </span>
는 뜻이다.
<br> \* 메모리에는 만들어져서 컴퓨터는 인지하지만 값이 없네? = undefine 출력
<br>
(natural)

```js
let something;
console.log(something); // undefined
```

<br>

## Null

값이 없다는 것을 나타내기 위해 쓰인다.
<br>
즉, 자바스크립트에게 여기엔 값이 없다는 것을 말하기 위해 쓰인다.
<br>
(un-natural)

```js
let something = null;
console.log(something); // null
```

<br>

---

<br>

# Array (배열)

배열은 데이터 타입을 그룹화 해주어 사용하기 용이하게 만들어준다.
<br>

배열 안에는 문자열 뿐아니라 숫자, boolean type, undefined, null 등 이 들어갈 수 있다.
<br>

배열은 `[]` (대괄호)를 사용하며, 각각의 항복은 쉼표 `,`로 분리해야한다.

<br>

## 배열의 길이

배열 안에 몇개의 item이 있는지 파악할 수 있으며, `arr.length`를 이용한다.

```js
const arr = [1, 2, 3, 4, 5];

let arrLength = arr.length;
console.log(arrLength); // 5
```

<br>

## 배열에서 값 찾기 / 값 추가하기

`arr[찾고싶은 값의 번째 - 1]` 해주면 된다.
<br>

`arr.push(추가하고 싶은 값)` 해주면 된다.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1
// 첫번째 값 1을 출력하길 원함 -> 1 - 1 = 0

arr.push(6);
console.log(arr); // 1, 2, 3, 4, 5, 6
```

---

<br>

# Object (객체)

객체에서는 배열과는 달리 `name : "doy", age : 20` 과 같이 값의 정보를 나타낼 수 있다.
<br>

`{}`을 쓰며, `name : "doy"` 에서 name은 property(특성) 이라고 한다.

<br>

## 객체 접근 방식

객체이름이 player이며, 안에있는 name을 가져오고 싶다면,
`player.name` 또는 `player["name"]`으로 가져올 수 있다.

<br>

---

<br>

# Calculator 만들기

```js
const a = 10;
const b = 5;

const plus = a + b;
const minus = a - b;
const multiply = a * b;
const divide = a / b;
const power = a ** b;
```
