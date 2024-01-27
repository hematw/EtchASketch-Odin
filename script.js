const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector("#btn");
const sizeInput = document.querySelector("#size-input");
const error = document.querySelector(".error")
const htmlRoot = document.querySelector(":root");

let size = 40;

function addDivs(num) {
    numSqr = num ** 2;
    for (let i = 0; i < numSqr; i++) {
        let div = document.createElement("div")
        div.className = "grid-item";
        div.style.width = `${560/num}px`
        div.style.paddingBottom = `${560/num}px`
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor= `#${randomColor()}`;
        });
        gridContainer.appendChild(div);
    }
}
addDivs(size);

function randomColor() {
    let colorCode = '';
    for (let i = 0; i < 6; i++) {
        colorCode += Math.floor(Math.random() * 16).toString(16);
    }
    return colorCode;
}

btn.addEventListener("click", () => {
    if (!sizeInput.value || sizeInput.value > 100) {
        error.innerHTML = "Invalid input!"
    } else {
        htmlRoot.style.setProperty(--size, sizeInput.value);
        gridContainer.innerHTML = "";
        addDivs(sizeInput.value)
    }
})