//const function making 16 square bracket divs 
function init() {
    makeGrid();
    changeColor();
}
init();


//function making a random color when called upon
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}



//function makes a 16 x 16 grid at page load
function makeGrid() {
    deleteGrid()
    const container = document.querySelector('#container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
    changeColor();
    
}
//fuction deletes the grid and makes a new grid when called upon
function bigCanvas() {
    deleteGrid()
    const container = document.querySelector('#container');
    for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 64; j++) {
            const square = document.createElement('div');
            square.classList.add('square', 'squareSmall');
            container.appendChild(square);
        }
    }
    changeColor();

}

//function makes a new small grid when called upon
function smallCanvas() {
    deleteGrid()
    changeColor();
    const container = document.querySelector('#container');
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            const square = document.createElement('div');
            square.classList.add('square', 'squareBig');
            container.appendChild(square);
        }
    }
    changeColor();

}

//function deletes all divs with the class of square
function deleteGrid() {
    changeColor();
    const container = document.querySelector('#container');
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        container.removeChild(square);
    });
    console.log("Deleted grid");
}



//function to change the color of the divs when hovered over
function changeColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
            console.log("Added colour to square " + randomColor());
        });
    });
}


//random color generator