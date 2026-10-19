

//selects the div to fill
const screen = document.querySelector(".sketch-screen");



//function to make the grids
function makeGrids(size) {

    screen.replaceChildren();

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





// make button prompt user input and make user input  change size
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    const userInput = prompt("enter grid size 1-100");
//make sure input is not empty
    if (userInput === null) return;
//make sure size is between 1 and 100 
    const n = Number(userInput);
    if (!Number.isInteger(n) || n < 1 || n > 100) {
        alert("input up to 100");
        return;
    }

    size = n;

    makeGrids(n);

})

makeGrids(16);






//color squares when hovered

//select screen 
//const gridContainer = document.querySelector(".sketch-screen");

//listen for mouseover
screen.addEventListener("mouseover", (e) => {

//turns cell black if touched
    if (e.target.classList.contains("row")) {
        e.target.style.backgroundColor = "red";
    }
})
