var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");
var win = true;

start.addEventListener("mouseover", function() {
    document.getElementById("status").innerHTML = "Get to E to win the game";

    //iterate over the bounderies elements and apply mouseover effect
    for (let i = 0; i < boundaries.length; i++) {

    boundaries[i].addEventListener("mouseover", () => {
        // adding red background by iterating over all walls
        for (let j = 0; j < boundaries.length; j++) {
            boundaries[j].classList.add("youlose");
        }

        
        this.element.classList.remove("youlose");
        alert("YOU LOSE! START OVER!");
        this.style.background = "#eeeeee";
        document.getElementById("status").innerHTML = "YOU LOSE!"
        stopPropagation();
    });
    }
    
});

end.addEventListener("mouseover", function() {
  if (win == true) {
    document.getElementById("status").innerHTML = "YOU WIN!";
    alert("CONGRATULATIONS! YOU WIN!");
  }
  win = true;
});
