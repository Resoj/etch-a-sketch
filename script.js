const gridSize = 600;

let gridDimensions = 16;

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.width = gridContainer.style.height = `${gridSize}px`;

function createGridCells() {
    const numOfGridCells = (gridDimensions * gridDimensions);
    for (let i = 0; i < numOfGridCells; i++) {
        const gridCell = document.createElement('div');

        gridCell.style.width = gridCell.style.height = `${(gridSize / gridDimensions) - 2}px`;
        gridCell.classList.add('cell');

        gridContainer.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = 'darkgrey';
        });
    }
}

createGridCells();