//const function making 16 square bracket divs 
function init() {
    makeGrid();
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
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }

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

//colors

//color change on hover

//stop randomColor function from running when black is clicked
function black() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        });
    });
}

//highly inefficient way of doing this, sorry

function red() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "red";
        });
    });
}

function blue() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "blue";
        });
    });
}

function green() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "green";
        });
    });
}

function yellow() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "yellow";
        });
    });
}

function orange() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "orange";
        });
    });
}

function purple() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "purple";
        });
    });
}

function pink() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "pink";
        });
    });
}

function brown() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "brown";
        });
    });
}

function pink() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "pink";
        });
    });
}

function grey() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "grey";
        });
    });
}

function erase() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "white";
        });
    });
}

function rainbow() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    });
}

function gradient() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
            square.style.opacity = 0.1;
        });
    });
}


function bubble() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
            square.style.borderRadius = "50%";
        });
    });
}

function glossy() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.opacity = 0.5;
        });
    });
}

function paintEntireRow() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.paddingLeft = "20px";
            square.style.paddingRight = "20px";
        });
    });
}

function paintEntireColumn() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.paddingTop = "20px";
            square.style.paddingBottom = "20px";
        });
    });
}

function disco() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
            square.style.borderRadius = "50%";
            square.style.paddingLeft = "20px";
            square.style.paddingRight = "20px";
            square.style.paddingTop = "20px";
            square.style.paddingBottom = "20px";
        });
    });
}

function discoBall() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
            square.style.borderRadius = "50%";
            square.style.paddingLeft = "20px";
            square.style.paddingRight = "20px";
            square.style.paddingTop = "20px";
            square.style.paddingBottom = "20px";
            square.style.opacity = 0.5;
        });
    });
}


function discoBall2() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.opacity = 0.5;
            square.style.backgroundColor = "silver";
            square.style.borderRadius = "50%";
            square.style.paddingLeft = "20px";
            square.style.paddingRight = "20px";
            square.style.paddingTop = "20px";
            square.style.paddingBottom = "20px";
            square.addEventListener('mouseover', () => {
                for (let i = 0; i < 12; i++) {
                    for (let j = 0; j < 12; j++) {
                        const square = document.createElement('div');
                        square.classList.add('discoSquare');
                        container.appendChild(square);
                    }
                }
            });

        });
    });
}

function mineSweeperMode() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {

        });
    });
}

//when clicked add class to all squares
function addClassMineSweeper() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.classList.add('square', 'minesweeper');
    });
}

function matrixMode() {
                const squares = document.querySelectorAll('.square');
                squares.forEach((square) => {
                square.classList.add('square', 'matrixMode');
                square.addEventListener('mouseover', () => {
                });
                });
                digitalRain();
            };

function digitalRain() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = "black";
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "#03A062";
            square.innerHTML = "¤&£";
        });
    });
}

//function creating string hello inside square