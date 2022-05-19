var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.getElementById("status");


//function for the game
const maze = () => {

    start.addEventListener("mouseover", () => {

        for (let j=0; j < boundaries.length-1; j++) {
            boundaries[j].classList.remove("youlose");
        }

        document.getElementById("status").innerHTML = "Get to the end 'E' to win";
        
        //adding boudries mouseover effect
        for (let i=0; i < boundaries.length-1; i++) {
            boundaries[i].addEventListener("mouseover", () => {
                
                //turning all boundries red
                for (let j=0; j < boundaries.length-1; j++) {
                    boundaries[j].classList.add("youlose");
                }

                document.getElementById("status").innerHTML = "YOU LOST. Move mouse over 'S' to retry, or Click 'S' to reset.";    
                
                //removing event listening
                start.removeEventListener()

            })
        }

        start.addEventListener("click", reset)

    })
}

//executing script on successful load
window.onload = function () {

    maze()
    


}

const reset = () => {
    console.log("Reset success");

    //turning all boundries grey
    for (let j=0; j < boundaries.length-1; j++) {
        boundaries[j].classList.remove("youlose");
    }

    maze()
}
