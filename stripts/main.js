
let greetInputEl;
let greetMsgEl;

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");


window.addEventListener("DOMContentLoaded", () => {

  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
});
});

