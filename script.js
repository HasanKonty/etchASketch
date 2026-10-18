


function makeGrids(size) {
    //selects the div to fill
    let screen = document.querySelector(".sketch-screen");
    //makes a loop to make divs "will be column by css"
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        //select the css to apply
        column.classList.add("column");
        //make a loop inside each column
        for (let j = 1; j <= size; j++) {
            //make div each loop turn
            let row = document.createElement("div");
            //add inline css to override the style.css
            row.classList.add("row");
            row.style.border = "2px solid black";
            //append the row cells to the column
            column.appendChild(row);
        }
        //append the columns to the screen with the row cells inside.
        screen.appendChild(column);
    }
}

makeGrids(16);