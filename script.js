const gridSize = 600;

let gridDimensions = 16;

const container = document.querySelector('.container');
container.style.width = container.style.height = `${gridSize}px`;

function createGridCells() {
    const numOfGridCells = (gridDimensions * gridDimensions);
    for (let i = 0; i < numOfGridCells; i++) {
        const gridCell = document.createElement('div');

        gridCell.style.width = gridCell.style.height = `${(gridSize / gridDimensions) - 2}px`;
        gridCell.classList.add('cell');

        container.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = 'darkgrey';
        });
    }
}

createGridCells();