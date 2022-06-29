const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const LENGTH_IMG = images.length;

const chosenImages = images[Math.floor(Math.random() * LENGTH_IMG)];

const bgImg = document.createElement("img");
// html code made by javascript
bgImg.src = `img/${chosenImages}`;

document.body.appendChild(bgImg);
// html 코드의 body 부분에 child로 append 해준다.
// 뒤로 보내는 것은 CSS에서 해결해야 할 부분 !
