//const function making 16 square bracket divs 
function init() {
    makeGrid();
    changeColor();
}
init();

let color = '#';

//function makes a random color
function randomColor() {
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function makes a 16 x 16 grid of divs
function makeGrid() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
}


//function to change the color of the divs when hovered over
function changeColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            randomColor();
            changeColor();
            square.style.backgroundColor = color;
        });
    });
}

//function making random colors when divs are hovered over

//random color generator

