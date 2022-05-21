var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.getElementById("status");
var score = 0;//game score
var canReset;//reset whole game and clear score
var canRestart;//can restart the current round of the game

const maze = () => {



}

//function that targets all boudaries and turns them red
const redWalls = () => {
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].classList.add("youlose");
    }
}

//function that targets all boudaries and turns them grey
const greyWalls = () => {
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].classList.remove("youlose");
    }
}

//function that executes when user reaches "E"
const win = () => {
    score += 5;
    canReset = true;
    canRestart = true;
}

//function that handles the game and score when the user restarts the round
const restart = () => {

}

//function that handles the game and score when the user resets the game
const reset = () => {
    score = 0;
}

//function that executes when the user loses the round
const lose = () => {
    score -= 10;
    start.addEventListener("mouseover",restart);
    start.addEventListener("click",reset);
}

//executing script on successful load
window.onload = function () {
    maze()
}