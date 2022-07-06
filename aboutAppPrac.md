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

# Function (함수)

어떤 코드를 반복시킬 수 있게 만들어줌.
<br>
반복되는 코드를 함수로 만들어주면 코드를 줄일 수 있고, 훨씬 효율적임.
<br>
\+ 실행시키는 코드가 필요하다.

```js
function iamGroot() {
  alert("Hi!!");
}

ianGroot();
```

<br>

## function에서 데이터를 받는 방법

함수이름 다음의 `()`안에 받고자하는 인수를 넣어주면 된다.

```js
function iamGroot(nameOfPerson, number) {
  alert(`Hello welcome ${nameOfPerson}!! you are ${number}th member in here!`);
}

iamGroot("doy", 20);
iamGroot("edge", 13);
```

<br>

## object 안에 function 넣기

object의 `{}` 안에 `:` 다음에 함수이름을 뺀 함수식을 넣어주면 된다.

```js
const allName = {
  name: function (firstName, name) {
    console.log(firstName + name);
  },
};

allName.name("Lee", "Doy");
```

<br>

## Calculator 만들기

```js
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

calculator.plus(10, 5);
calculator.minus(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
calculator.power(10, 5);
```

<br>

## return

return을 해주면 해당 함수의 결과를 함수 호출 부분에 넘겨주어 호출 부분을 결과로 대체해 주는 것이다.

```js
const age = 66;
function age(foreignAge) {
  return foreignAge + 2; // --- 1
}

const kr = age(age); // --- 2
console.log(kr); // 68
// 1이 2의 = 다음부분을 대체한다.
```

함수가 함수 외부에 적용되기 위해서는 return 코드가 필요하다.
<br>
콘솔 코드는 실제로 실행안되며, 콘솔에서 보여주는 것이다.

<br>

---

<br>

## prompt

```js
const age = prompt("How old are you?");
/* 
prompt can show you the message in '()'
and stopping execution.

but you can not change this with CSS,
So now you can use 'modal' instead of 'prompt'
*/
```

<br>

## typeof

typeof는 값의 type을 알려준다.

<br>

## parseInt

string type을 number로 변환할 때 쓰인다.
<br>

`const age = "15"` 라고 했을때,
<br>
`typeof age` = string 이며
<br>
`typeof (parseInt(age))` = number 이다.

<br>

## isNaN

결과가 Not a Number 인지 boolean으로 알려준다.
<br>

결과가 `NaN = true`
<br>
결과가 `NaN != false`

<br>

# 조건문 (if ~ else)

조건(condition)을 주어 동작을 제어할 수 있음.

```js
if (condition) {
  // true
} else {
  // false
}
```

condition 즉, 조건은 반드시 boolean으로 나타낼 수 있어야 한다.

<br>

## else if

조건이 하나보다 많은 경우, 조건을 else if를 이용해 추가해준다.

```js
if (condition1) {
  // 1
} else if (condition2) {
  // 2
} else {
  // 때에 따라 작성 안해도 됨
}
```

<br>

## && , ||

&&는 And 연산자로 `true && false === false` <br>
||는 Or 연산자로 `true || false === true`
<br>

즉, and 연산자는 둘 다 참이어야 true가 되며 or 연산자는 둘 중 하나라도 참이면 true가 된다.

<br>
