
function helloWorld() {
    let myHeading = document.querySelector("h1");
    myHeading.textContent = "Hello world!";
}

function alertIce() {
    let iceCream = "chocolate";
    if (iceCream === "chocolate") {
        alert("我最喜欢巧克力冰激淋了。");
    } else {
        alert("但是巧克力才是我的最爱呀……");
    }
}

// 事件
function fireFox() {
    let myImage = document.querySelector("img");

    myImage.onclick = function () {
        let mySrc = myImage.getAttribute("src");
        if (mySrc === "images/dinosaur.png") {
            myImage.setAttribute("src", "images/solidwork.png");
        } else {
            myImage.setAttribute("src", "images/dinosaur.png");
        }
    }
}

fireFox();



// 事件 + localStorage
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        // setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}
//  prompt() 函数， https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt  alert() 函数 对比

//  localStorage API https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage   将数据存储在浏览器中公后续获取

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};


// http://chrisdavidmills.github.io/