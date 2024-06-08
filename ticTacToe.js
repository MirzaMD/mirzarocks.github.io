const boxes = document.querySelectorAll(".box");
const victoryStatus=document.getElementById("victoryStatus");
document.addEventListener("DOMContentLoaded", () => {
    let turns = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let isXturn = Math.random() > 0.5;
    
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            if (box.textContent === "") {
                box.textContent = isXturn ? "X" : "O";
                let indexClicked = parseInt(box.dataset.index); // get the index of the clicked box
                turns = turns.filter(turn => turn !== indexClicked); // remove the clicked box from available turns

                // Check for win condition or tie here
                    setTimeout(()=>{checkWin()},400)


                // Computer's move
                if (turns.length > 0) {
                    let compIndex = Math.floor(Math.random() * turns.length);
                    let compMove = turns[compIndex];
                    setTimeout(()=>{
                    boxes[compMove].textContent = isXturn ? "O" : "X";},400);
                    turns = turns.filter(turn => turn !== compMove); // remove computer's move from available turns
                }else{
                isXturn = !isXturn;}
            }
        });
    });
});
function checkWin() {
    if (
        (boxes[0].textContent === "X" && boxes[1].textContent === "X" && boxes[2].textContent === "X") ||
        (boxes[3].textContent === "X" && boxes[4].textContent === "X" && boxes[5].textContent === "X") || // middle row
        (boxes[6].textContent === "X" && boxes[7].textContent === "X" && boxes[8].textContent === "X") || // bottom row
        (boxes[0].textContent === "X" && boxes[3].textContent === "X" && boxes[6].textContent === "X") || // left column
        (boxes[1].textContent === "X" && boxes[4].textContent === "X" && boxes[7].textContent === "X") || // middle column
        (boxes[2].textContent === "X" && boxes[5].textContent === "X" && boxes[8].textContent === "X") || // right column
        (boxes[0].textContent === "X" && boxes[4].textContent === "X" && boxes[8].textContent === "X") || // main diagonal
        (boxes[2].textContent === "X" && boxes[4].textContent === "X" && boxes[6].textContent === "X")    // anti diagonal
    ) {
        victoryStatus.style.display="block";
        victoryStatus.textContent="X Wins!";
        setTimeout(()=>{
            location.reload()
        },750)
    } else if (
        (boxes[0].textContent === "O" && boxes[1].textContent === "O" && boxes[2].textContent === "O") ||
        (boxes[3].textContent === "O" && boxes[4].textContent === "O" && boxes[5].textContent === "O") || // middle row
        (boxes[6].textContent === "O" && boxes[7].textContent === "O" && boxes[8].textContent === "O") || // bottom row
        (boxes[0].textContent === "O" && boxes[3].textContent === "O" && boxes[6].textContent === "O") || // left column
        (boxes[1].textContent === "O" && boxes[4].textContent === "O" && boxes[7].textContent === "O") || // middle column
        (boxes[2].textContent === "O" && boxes[5].textContent === "O" && boxes[8].textContent === "O") || // right column
        (boxes[0].textContent === "O" && boxes[4].textContent === "O" && boxes[8].textContent === "O") || // main diagonal
        (boxes[2].textContent === "O" && boxes[4].textContent === "O" && boxes[6].textContent === "O")    // anti diagonal
    ) {
        victoryStatus.style.display="block";
        victoryStatus.textContent="O Wins!";
        setTimeout(()=>{
            location.reload()
        },750)
    }
}
