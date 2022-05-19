var boundaries = document.querySelectorAll(".boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.getElementById("status");

window.onload = function () {


    start.addEventListener("mouseover", () => {

        document.getElementById("status").innerHTML = "Get to the end 'E' to win";
        
        //adding boudries mouseover effect
        for (let i=0; i < boundaries.length-1; i++) {
            boundaries[i].addEventListener("mouseover", () => {
                
                //turning all boundries red
                for (let j=0; j < boundaries.length-1; j++) {
                    boundaries[j].classList.add("youlose");
                }

                document.getElementById("status").innerHTML = "YOU LOST :( Try again by clicking on 'S'";    
                

            })
        }

        start.addEventListener("click", reset)

    })


}

const reset = () => {
    console.log("Reset success");
}
