/**
 *
 *
 *
 */

const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go forthe great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    author: "Reid Hoffman",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "Be slow to fall into friendship. but when you are in, continue firm & constant.",
    author: "Socrates",
  },
  {
    quote: "All things are difficult before they are easy.",
    author: "Thomas Fuller",
  },
  {
    quote: "What do you want a meaning for? Life is a desire, not a meaning",
    author: "Charlie Chaplin",
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin",
  },
  {
    quote: "What you risk reveals what you value",
    author: "Jeanatte Winterson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const LENGTH_QUOTES = quotes.length;

// console.log(quotes[parseInt(Math.random() * 10)]);
// 형변환이라 굳이 이렇게 쓸 필요 없을 거 같다고 하더라....

const todaysQuote = quotes[Math.floor(Math.random() * LENGTH_QUOTES)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/**
 * [Strategy]
 *
 * floor는 1.99999도 1로 내려줌 (내림)
 * ceil은 1.9999나 1.111이나 전부 2로 올려줌 (올림)
 * round는 0.7은 1이 되고 0.4는 0이 된다. 우리가 익히 아는 반올림 (반올림)
 *
 * => 여기서는 length가 10이기 때문에 0~9까지의 인덱스를 랜덤으로 줄력해 줘야함
 * 여기서의 length는 10 -> 10을 변수로 대체한다.
 *
 */
