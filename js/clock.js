/**
 * setInterval(function, milliseconds)
 * : 함수를 몇 초 간격으로 호출할 것인지 정할 수 있는 함수 (다회성, 멈추지 않음)
 * 
 * setTimeout(function, milliseconds)
 * : 함수를 몇 초후에 호출할 것인지 정할 수 있는 함수 (일회성)
 * 
 * [ Solution for minutes ]
 * minutes default feature = 0s, 1s, 2s ... 58s, 59s
 * -> you can fix it by using padStart(maxlength, string)
 * 
 * [ Solution for clock ]
 * clock shows itself 1 seconds later 
 * -> you can fix it by call function 'before' setInterval code
 */

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);