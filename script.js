'use strict'
const drawpad = document.querySelector('#drawpad');
const btnReset = document.querySelector('.reset');
const btnStart = document.querySelector('.start');
const userInput = document.getElementById('quantity');


let newGrid = "";

const createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        drawpad.appendChild(div);
    }
    drawpad.style.gridTemplateColumns = 'repeat(16, 1fr)';
    drawpad.style.gridTemplateRows = 'repeat(16, 1fr)';
    draw();
}

createGrid();

function draw() {
    let divElements = document.querySelectorAll('.square');
    for (let element of divElements) {
        element.addEventListener('mouseover', () => {
            let rot = Math.floor(Math.random() * 256)
            let gruen = Math.floor(Math.random() * 256)
            let blau = Math.floor(Math.random() * 256)
            element.style.backgroundColor = 'rgb(' + rot + ',' + gruen + ',' + blau + ')';
        })
    }
}

function deleteClass() {
    const colorChoices = document.querySelectorAll(".color");
    for (let color of colorChoices) {
        color.classList.remove("active");
    }
}

btnStart.addEventListener("click", function () {
    let gridNr = userInput.value;
    gridNr = gridNr * gridNr;
    for (let i = 0; i < gridNr; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        drawpad.appendChild(div);
    }
    drawpad.style.gridTemplateColumns = 'repeat(' + userInput.value + ', 1fr)';
    drawpad.style.gridTemplateRows = 'repeat(' + userInput.value + ', 1fr)';
    draw();

});

btnReset.addEventListener("click", function () {
    let divElements = document.querySelectorAll('.square');
    for (let element of divElements) {
        element.remove();
    }
});


const black = document.querySelector('#black')
black.addEventListener('click', () => {
    colorBlack();
})

const red = document.querySelector('#red')
red.addEventListener('click', () => {
    colorRed();
})

const green = document.querySelector('#green')
green.addEventListener('click', () => {
    colorGreen();
})

const blue = document.querySelector('#blue')
blue.addEventListener('click', () => {
    colorBlue();
})

const random = document.querySelector('#random')
random.addEventListener('click', () => {
    draw();
})



function colorBlack() {
    let colorBlack = 255;
    let colorBlue = 0;
    let colorRed = 0;
    let colorGreen = 0;
    let randomColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue +  ")";
    let divElements = document.querySelectorAll('.square');
    for (let element of divElements) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColor;
        })

    }

}
function colorRed() {
    let colorBlue = 0;
    let colorRed = 255;
    let colorGreen = 0;
    let randomColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    let divElements = document.querySelectorAll('.square');
    for (let element of divElements) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColor;
        })
    }
}
function colorGreen() {
    let colorBlue = 0;
    let colorRed = 0;
    let colorGreen = 255;
    let randomColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    let divElements = document.querySelectorAll('.square');
    for (let element of divElements) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColor;
        })
    }
}
function colorBlue() {
    let colorBlue = 255;
    let colorRed = 0;
    let colorGreen = 0;
    let randomColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    let divElements = document.querySelectorAll('.square');
    for (let element of divElements) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColor;
        })
    }

}
function colorRandom(){
    let colorBlue = 0;
    let colorRed = 0;
    let colorGreen = 0;
    let randomColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    for (let element of divElements) {
        let divElements = document.querySelectorAll('.square');
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColor;
        })
    }
}


