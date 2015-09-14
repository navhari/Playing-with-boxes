//global variables
var containerDiv = document.getElementById("container");

// global functions
function addBox() {
    console.log("adding box");

    // Perform validations

    // Create and Add 'box' div to '#container' div




    // create new boxDiv
    var boxDiv = document.createElement("div");
    boxDiv.setAttribute('class', 'green');
    boxDiv.innerText = containerDiv.childElementCount.toString();

    console.log("boxDiv", boxDiv);
    console.log("containerDiv", containerDiv);

    containerDiv.appendChild(boxDiv);


    //document.getElementById("box").innerHTML = document.getElementById("green").innerHTML;

}

function deleteBox() {
    console.log("deleting box");

    containerDiv.removeChild(containerDiv.lastElementChild);

}

