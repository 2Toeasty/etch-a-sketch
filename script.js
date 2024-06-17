const createGridButton = document.querySelector("#btn");
const chooseGridSize = document.querySelector("#sizeChooser");
const resetCurrentGrid = document.querySelector("#currentReset");
function createGrid(size) {
    const container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", function () {
                column.style.backgroundColor = "black";
            })
        }
    }

}

var size = 16;

function deleteGrid() {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

chooseGridSize.addEventListener("click", function () {
    size = prompt("Enter new Grid size");
    while (size > 100 || size < 1){
        size = prompt("please enter a number number between 1-100");
    }
    deleteGrid();
    createGrid(size);
})

createGrid(16);
createGridButton.addEventListener("click", function () {
    size = 16;
    deleteGrid();
    createGrid(16);
})

resetCurrentGrid.addEventListener("click", function () {
    deleteGrid();
    createGrid(size);
})