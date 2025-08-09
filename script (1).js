// let heading = document.querySelector("h1");
// let box = document.querySelector(".box");
// let name = document.querySelector(".name");
// let myname = prompt("Enter your name: ");
// name.textContent = myname;

// let blueButton = document.querySelector(".blue-btn");
// let circle = document.querySelector(".circle");
// let redButton = document.querySelector(".red-btn");

// function changeColor(color) {
//   heading.style.color = color;
// }

// redButton.addEventListener("click", function () {
//   heading.style.color = "red";
// });

// redButton.addEventListener("click", function () {
//   changeColor("red");
// });

// redButton.addEventListener("mouseover", function () {
//   redButton.style.width = "200px";
// });

// blueButton.addEventListener("click", function () {
//   changeColor("blue");
// });

// nameButton.addEventListener("click", function () {
//   name.textContent = myname;
// });

// console.log(box);
// console.log(box.classList);
// circle.addEventListener("click", function () {
//   box.classList.add("rounded");
//   console.log(box.classList);
// });

let score = document.querySelector(".score");
let count = 0;

function add() {
  count++;
  score.textContent = count;
}

function subtract() {
  count--;
  score.textContent = count;
}

function add2Numbers() {
  count = count + 2;
  score.textContent = count;
}

function subtract2Numbers() {
  count = count - 2;
  score.textContent = count;
}

function reset() {
  count = 0;
  score.textContent = count;
}

// generate random number

let randomNumber = document.querySelector(".randomNumber");

function generateRandomNumber() {
  let random = Math.floor(Math.random() * 100) + 1;
  randomNumber.textContent = random;
}
