var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var title = document.getElementById("status");
var score = 0;//game score
const game = document.getElementById("game");//user for cheating
var scoreDisplay = document.getElementById("score");


const maze = () => {

    stopwatch.start()
    console.log(stopwatch.formatTime(stopwatch.value))
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
    scoreDisplay.innerHTML = "<strong>Your Score: </strong>"+score;
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
    stopwatch.stop();
    //remove event listener from END and walls
    
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].removeEventListener("mouseover",lose);
    }
    end.removeEventListener("mouseover",win);
    game.removeEventListener("mouseleave",cheat);
    redWalls()
    score -= 10;
    scoreDisplay.innerHTML = "<strong>Your Score: </strong>"+score;
   
    //adding event listener to start for restart and reset
    start.addEventListener("mouseover",restart);
    start.addEventListener("click",reset);
}

//function executed when user leaves the game container aka cheating
const cheat = () => {
    stopwatch.reset();
    alert("NO CHEATING!!!");
    //reset score after cheating
    end.removeEventListener("mouseover",win);
    game.removeEventListener("mouseleave",cheat);
    start.addEventListener("mouseover",maze)
    for (let i = 0; i < boundaries.length - 1; i++) {
        boundaries[i].removeEventListener("mouseover",lose);
    }
    title.innerHTML = "Begin by moving your mouse over the 'S'.";

}

//------------------------------------------------------------------
//--------------------Adding stopwatch functions//----------------------
// Reference: https://www.101computing.net/stopwatch-class-javascript/

class Stopwatch {
    constructor(id, delay=100) { //Delay in ms
      this.state = "paused";
      this.delay = delay;
      this.display = document.getElementById(id);
      this.value = 0;
    }
    
    formatTime(ms) {

      var minutes = 0;
      var seconds = Math.floor((ms -  (minutes * 60000)) / 1000);
      var ds = Math.floor((ms  - (minutes * 60000) - (seconds * 1000))/100);
  

      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return minutes+':'+seconds+'.'+ds;
    }
    
      update() {
      if (this.state=="running") {
        this.value += this.delay;
      }
      this.display.innerHTML = this.formatTime(this.value);
    }
    
    start() {
      if (this.state=="paused") {
        this.state="running";
        if (!this.interval) {
          var t=this;
          this.interval = setInterval(function(){t.update();}, this.delay);
        }
      }
    }
    
    stop() {
         if (this.state=="running") {
        this.state="paused";
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
         }
    }
    
    reset() {
      this.stop();
      this.value=0;
      this.update();
    }
  }
  
  var stopwatch = new Stopwatch("stopwatch");

//------------------------------------------------------------------
//------------------------------------------------------------------

//executing game script on successful load
window.onload = function () {
    start.addEventListener("mouseover",maze);
}