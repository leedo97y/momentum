const playerName = "doylee";
const playerPoint = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// [ Array ]
const playerList = ["doylee", 121212, true, "little bit"];


// [ Object ]
const player = {
  name : "doylee",
  point : 121212,
  handsome : true,
  fat : "little bit",
}

// console.log(player);
// console.log(player.name);

// add object 
player.lastname = "potato";
console.log(player);
player.favorite = "cucumber";
console.log(player);
// change something in object
player.point = 150;
console.log(player); // 150
player.point  = player.point + player.point;
console.log(player); // 300


// [ Function ]
// made by me (1) 성이 맞다면, 이름이랑 합쳐서 보여주기 
const lastName = "Lee";
const familyName = "Lee";

function doy () {
  const name = "doy";
  if(familyName === lastName) {
    return name + lastName;
  } else {
    return "I'm Lee's !!"
    
  }
}
console.log(doy());


// made by me (2) myList name이 nm과 같다면 요소 추가하기
const myList = {
  name : "doy",
  age : 25,
  point : 300,
  startingPoint : 5,
  birthDate : 19971024,
}

function addMyList () {
  const nm = "doy";
  if (myList.name === nm) {
    myList.favorite = "cucumber";
    myList.hate = "bell pepper";
    myList.familyUnit = 4;
    return myList;
  } else if (myList.name !== nm) {
    return "you're Wrong!!";
  }
}

console.log(addMyList());

// made by me (3) 배열 끝 요소가 'melon'이 맞으면 뺴기
const vegeArr = ["onion", "carrot", "bean", "cabbage", "chicory", "melon"];
const fruitArr = [];

function forVegetables () {
  const fruit = "melon";
  for (let i = 0; i < vegeArr.length; i++) {
    if (vegeArr[i] === fruit) {
      let a = vegeArr.pop();
      fruitArr.push(a);
      console.log(fruitArr);
    } else {
      console.log("hehe");
    }
  }
  return vegeArr;
}
console.log(forVegetables());


// made by me (4) function 활용해보기
function names (name) {
  console.log(`hello my name is ${name}`);
}

names("jay");
names("elisa");
names("palo");


// made by me (5)
function prepForExam(lecture, movie) {
  console.log(`please stop watching ${movie} because ur ${lecture} exam is tomorrow !`)
}

prepForExam("math", "Avengers");
prepForExam("history", "JurassicPark");


// made by me! (6)
function plus(x, y) {
  console.log(x + y);
}

plus(23, 45);


const calculator = {
  plus : function (a, b) {
    console.log(a + b);
  },
  minus : function (a, b) {
    console.log(a - b);
  },
  multiply : function (a, b) {
    console.log(a * b);
  },
  divide : function (a, b) {
    console.log(a / b);
  },
  power : function (a, b) {
    console.log(a ** b);
  },
}

calculator.plus (10, 2);
calculator.minus (10, 2);
calculator.multiply (10, 2);
calculator.divide (10, 2);
calculator.power (10, 2);