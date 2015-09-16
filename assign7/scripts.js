/**
 * Created by Anil on 10-09-2015.
 */
var boxDiv = document.getElementById("box");


var leftposition = 100;
var topposition = 100;


function upFunction() {
    if (topposition >= 100) {
        topposition = topposition - 100;
        boxDiv.style.top = topposition.toString() + "px";
    }
}
function downFunction() {
    if (topposition < 800) {
        topposition = topposition + 100;
        boxDiv.style.top = topposition.toString() + "px";

    }
}
function leftFunction() {
    if (leftposition >= 100) {
        leftposition = leftposition - 100;
        boxDiv.style.left = leftposition.toString() + "px";

    }
}
function rightFunction() {

    if (leftposition < 800) {
        leftposition = leftposition + 100;
        boxDiv.style.left = leftposition.toString() + "px";

    }

}
window.onkeydown = function keyEvent(event) {

    console.log(event.keyCode);

    if (event.keyCode == 37) {
        leftFunction();
    }

    else {

        if (event.keyCode == 38) {
            upFunction();
        }


        else {

            if (event.keyCode == 39) {
                rightFunction();
            }
            else {

                if (event.keyCode == 40) {
                    downFunction();
                }
            }
        }
    }
}