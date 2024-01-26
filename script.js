const gridContainer = document.querySelector(".grid-container");
const htmlRoot = document.querySelector(":root");
const btn = document.querySelector("#btn");
const sizeInput = document.querySelector("#size-input");
const error = document.querySelector(".error")

let size = getComputedStyle(htmlRoot).getPropertyValue("--size");

function addDivs(num) {
    num = num ** 2;
    for (let i = 0; i < num; i++) {
        gridContainer.innerHTML += '<div class="grid-item"></div>'
    }
}
addDivs(size);

function randomColor() {
    let colorCode = '';
    for(let i = 0; i<6; i++) {
        colorCode += Math.floor(Math.random() * 16).toString(16);
    }
    return colorCode;
}

btn.addEventListener("click", ()=> {
    if(!sizeInput.value || sizeInput.value>100) {
        error.innerHTML = "Invalid input!"
    } else {
        gridContainer.innerHTML = "";
        addDivs(sizeInput.value)
    }
})

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
    item.addEventListener("mouseover", (() => {
        item.setAttribute("style", `background-color:#${randomColor()}`)
    }));
});