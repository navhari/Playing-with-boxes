//global variables
var containerDiv = document.getElementById("container");

// global functions
function addBox() {
    console.log("adding box");
    var boxSize = parseInt(document.getElementById("box-size-input").value);
   // var boxNumber = parseInt(prompt('Enter the number of boxes'));
    // Perform validations

    // Create and Add 'box' div to '#container' div
    console.log(boxSize);


    if ((containerDiv.childElementCount+boxSize) <= 9) {
        for (var i = 0; i < boxSize; i++) {
            console.log("containerDiv", containerDiv);

            // create new boxDiv
            var boxDiv = document.createElement("div");
            boxDiv.setAttribute('class', 'green');
            boxDiv.innerText = containerDiv.childElementCount.toString();
            console.log("boxDiv", boxDiv);

            containerDiv.appendChild(boxDiv);

            console.log(boxSize + " added");
        }

    }

    else {
        document.getElementById("message").innerText = "box already full!!";
    }
}

function deleteBox() {

   // var boxNumberDelete = prompt('Enter the number of boxes');
    var boxSizeDelete = parseInt(document.getElementById("box-size-input").value);

    if (containerDiv.childElementCount > 0) {

        for (var i = 1; i <= boxSizeDelete; i++) {
            console.log("deleting box");

            containerDiv.removeChild(containerDiv.lastElementChild);

            console.log(boxSizeDelete + " deleted");
        }
    }
    else {
        document.getElementById("message").innerText = "box already empty!!";

        // alert("Box already Full!!");
    }
}

/**
 * Created by Anil on 09-09-2015.
 */
