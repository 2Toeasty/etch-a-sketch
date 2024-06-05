function makeGrid(){
    const container = document.querySelector("#container");
    for (let i = 0; i <= 5; i++){
        var row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j <=5; j++){
            var column = document.createElement("div");
            column.classList.add("column");
            column.textContent = "Column";
            row.appendChild(column);
        }
    }
}

makeGrid();