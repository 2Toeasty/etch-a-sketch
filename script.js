function createGrid(size) {
    const container = document.querySelector("#container");
    for (let i = 0; i <= size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j <= size; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", function () {
                column.style.backgroundColor = "black";
            })
        }
    }
}

createGrid(16);