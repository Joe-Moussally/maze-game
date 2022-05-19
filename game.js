var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");

start.addEventListener("mouseover", function() {
    document.getElementById("status").innerHTML = "Get to E to win the game";

    //iterate over the bounderies elements and apply mouseover effect
    for (let i = 0; i < boundaries.length; i++) {

        //When the user hover the walls
        boundaries[i].addEventListener("mouseover", () => {
            
            // adding red background by iterating over all walls
            for (let j = 0; j < boundaries.length - 1; j++) {
                boundaries[j].classList.add("youlose");
            }
        });
        }
        
});
