/**
 * Created by Anil on 10-09-2015.
 */
var boxDiv= document.getElementById("box");
//var containerDiv= document.getElementById("container");

var leftposition=100;
var topposition=100;

function upFunction(){

   topposition=topposition-100;
    boxDiv.style.top=topposition.toString()+"px";

}

function downFunction(){
    topposition=topposition+100;
    boxDiv.style.top=topposition.toString()+"px";

}

function leftFunction(){
    leftposition=leftposition-100;
    boxDiv.style.left=leftposition.toString()+"px";

}

function rightFunction(){
    leftposition=leftposition+100;
    boxDiv.style.left=leftposition.toString()+"px";

}