var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var title = document.getElementById("status");
var score = 0;//game score
const game = document.getElementById("game");//user for cheating

const maze = () => {

    greyWalls()
    game.addEventListener("mouseleave",cheat);
    title.innerHTML = "Get to E to win. --SCORE: " + score;
    //adding event listeners when the game begins
    end.addEventListener("mouseover",win);
    start.removeEventListener("mouseover",restart);

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
    game.removeEventListener("mouseleave",cheat);

    score += 5;
    title.innerHTML = "YOU WON!(Click S: Reset / Move to S: Restart) --SCORE: " + score;
    // canReset = true;
    // canRestart = true;
}

//function that handles the game and score when the user restarts the round
const restart = () => {
    
    greyWalls()
    maze();
}

//function that handles the game and score when the user resets the game
const reset = () => {
    alert("GAME HAS BEEN RESET");
    

    //reseting game properties before 
    score = 0;
    title.innerHTML = "Begin by moving your mouse over the 'S'.";
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].removeEventListener("mouseover",lose);
    }
    end.removeEventListener("mouseover",win);
    game.removeEventListener("mouseleave",cheat);
    start.addEventListener("mouseover",maze);
    
}

//function that executes when the user loses the round
const lose = () => {

    //remove event listener from END and walls
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].removeEventListener("mouseover",lose);
    }
    end.removeEventListener("mouseover",win);
    game.removeEventListener("mouseleave",cheat);

    redWalls()

    score -= 10;
    title.innerHTML = "YOU LOST (Click S: Reset / Move to S: Restart) --SCORE: " + score;
   

    //adding event listener to start for restart and reset
    start.addEventListener("mouseover",restart);
    start.addEventListener("click",reset);
}

//function executed when user leaves the game container aka cheating
const cheat = () => {
    alert("NO CHEATING!!! (score reset)");
    //reset score after cheating
    score = 0;
    end.removeEventListener("mouseover",win);
    game.removeEventListener("mouseleave",cheat);
    start.addEventListener("mouseover",maze)
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].removeEventListener("mouseover",lose);
    }
    title.innerHTML = "Begin by moving your mouse over the 'S'.";

}

//executing game script on successful load
window.onload = function () {
    start.addEventListener("mouseover",maze);
}