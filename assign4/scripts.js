/**
 * Created by Anil on 09-09-2015.
 */
var containerDiv = document.getElementById("container");
//var boxDiv=document.getElementsByClassName("box");

function addBox() {
    console.log("adding box");

    var boxDiv = document.createElement("div");

    if (containerDiv.childElementCount <= 8) {

        if (containerDiv.childElementCount % 2 == 0) {
            boxDiv.setAttribute('class', 'box column-green');
        } else {

            boxDiv.setAttribute('class', 'box column-red');

        }


        boxDiv.innerText = containerDiv.childElementCount.toString();


        containerDiv.appendChild(boxDiv);

        console.log("boxDiv", boxDiv);
        console.log("containerDiv", containerDiv);


    }

    else {
        document.getElementById("message").innerText="box already full!!";
    }
}

function deleteBox() {
    console.log("deleting box");

    if (containerDiv.childElementCount > 0) {
        containerDiv.removeChild(containerDiv.lastElementChild);
    }
    else {
        document.getElementById("message").innerText="box already empty!!";

        // alert("Box already Full!!");
    }
}