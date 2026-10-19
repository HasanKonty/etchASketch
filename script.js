

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
            row.style.border = "1px dotted grey";
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
//make sure size is a number between 1 and 100
    const n = Number(userInput);   
    if (!Number.isInteger(n) || n < 1 || n > 100) {
        alert("input up to 100");
        return;
    }

    size = n;

    makeGrids(n);

})
// make default grid size 16x16
makeGrids(16);



//color squares when hovered
// make function to create random color 
function random() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g} , ${b})`;
}
//listen for mouseover
screen.addEventListener("mouseover", (e) => {

//turns cell red if touched
    if (e.target.classList.contains("row") && 
//check if the cell is colored and skip if colored    
         !e.target.style.backgroundColor) {
//give a random color            
        e.target.style.backgroundColor = random();
    }
//    
    if (+e.target.style.opacity <= 0.9) {
        e.target.style.opacity = +e.target.style.opacity + 0.1;
    }
})
