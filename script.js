const gridSize = 640;

let gridDimensions = 16;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = gridContainer.style.height = `${gridSize}px`;

function createGridCells() {
    const numOfGridCells = (gridDimensions * gridDimensions);
    for (let i = 0; i < numOfGridCells; i++) {
        const gridCell = document.createElement('div');

        gridCell.style.width = gridCell.style.height = `${gridSize / gridDimensions - 2}px`;
        gridCell.classList.add('cell');

        gridContainer.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = 'darkgrey';
        });
    }
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGridCells(gridDimensions);
}

function changeGridDimensions(newGridDimensions){
    resetGrid();
    gridDimensions = newGridDimensions;

}

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    resetGrid();
});

const sizeButton = document.querySelector('.size-button');

sizeButton.addEventListener('click', () => {
    let userInput = prompt("Enter a number between 16 and 100 as the size of your new grid dimension:")
    
    if(userInput === null){
        return;
    }
    
    if (userInput >= 16 && userInput <= 100){
        gridDimensions = userInput;
        changeGridDimensions(gridDimensions);
    }
    else{
        alert("Grid dimensions must be between 16 and 100")
    }
});

createGridCells();