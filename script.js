const gridContainer = document.querySelector('.gridContainer');

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        const gridColumn = gridContainer.appendChild(document.createElement('div'));
        for(let j = 0; j < gridSize; j++){
            const gridSquare = document.createElement('div');
            gridSquare.className = 'gridSquare';
            gridColumn.appendChild(gridSquare)
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.style.backgroundColor = 'grey';
            });
        }
    }
}

createGrid(32);