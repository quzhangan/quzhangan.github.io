// let myHeading = document.querySelector("h1");   //函数获取标题的引用
// myHeading.textContent = "Hello world!";

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }


//传递给 addEventListener() 的函数被称为匿名函数，因为它没有名字----另一种表达形式 () => 代替 function ()：
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });
  

let images = document.querySelectorAll("img");

myImage = images[1];
myImage.onclick = function () {
let mySrc = myImage.getAttribute("src");
if (mySrc === "images/22.png") {
    myImage.setAttribute("src", "images/23.png");
} else {
    myImage.setAttribute("src", "images/22.png");
}
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    let myName = prompt("请输入你的名字。");    //弹出一个对话框。需要用户输入数据，并在确定后将数据存储在 myName 变量里
    if (!myName){
        setUserName();
    }else{
    localStorage.setItem("name", myName);     //数据存储在浏览器中供后续获取  创建一个'name' 数据项，并把 myName 变量复制给它
    myHeading.textContent = "酷毙了，" + myName;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
  };
  