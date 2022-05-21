var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var title = document.getElementById("status");
var score = 0;//game score
var canReset;//reset whole game and clear score
var canRestart;//can restart the current round of the game

const maze = () => {

    title.innerHTML = "Get to E to win. --SCORE: " + score;
    //adding event listeners when the game begins
    end.addEventListener("mouseover",win);
    start.removeEventListener("mouseover",restart);
    start.removeEventListener("click",reset);
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].addEventListener("mouseover",lose);
    }



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
    //remove event listener from END and walls
    end.removeEventListener("mouseover",win);
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].removeEventListener("mouseover",lose);
    }

    score += 5;
    title.innerHTML = "YOU WON!(Click S: Reset / Move to S: Restart) --SCORE: " + score;
    canReset = true;
    canRestart = true;
}

//function that handles the game and score when the user restarts the round
const restart = () => {
    maze();
}

//function that handles the game and score when the user resets the game
const reset = () => {
    score = 0;
}

//function that executes when the user loses the round
const lose = () => {

    //remove event listener from END and walls
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].removeEventListener("mouseover",lose);
    }
    end.removeEventListener("mouseover",win);

    redWalls()
    score -= 10;

    //adding event listener to start for restart and reset
    start.addEventListener("mouseover",restart);
    start.addEventListener("click",reset);
}

//executing game script on successful load
window.onload = function () {
    start.addEventListener("mouseover",maze);
}