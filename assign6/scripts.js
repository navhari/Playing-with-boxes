/**
 * Created by Anil on 10-09-2015.
 */
var boxDiv= document.getElementById("box");

function upFunction(){

   boxDiv.style.top= boxDiv+boxDiv.style.top-"100px";

}

function downFunction(){
    boxDiv.style.top= boxDiv+boxDiv.style.top+"100px";

}

function leftFunction(){
    boxDiv.style.left="100px";

}

function rightFunction(){
    boxDiv.style.left="200px";

}