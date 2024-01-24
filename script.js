const gridContainer = document.querySelector(".grid-container");

function addDivs(num) {
    num = num ** 2*4;
    for (let i = 0; i < num; i++) {
        gridContainer.innerHTML += '<div class="grid-item"></div>'
    }
}
addDivs(20);

function randomColor() {
    let colorCode = '';
    for(let i = 0; i<6; i++) {
        colorCode += Math.floor(Math.random() * 16).toString(16);
    }

    return colorCode;
}


const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
    item.addEventListener("mouseover", (() => {
        item.setAttribute("style", `background-color:#${randomColor()}`)
    }));
});


