// var element;                      Dom Object
// element = document.all;
// console.log(element);

// Get Set Method in Dom
// var element;
// element=document.getElementById("Para").innerText;
// console.log(element);

//var element;
//element=document.getElementById("Para").innerHTML;
//element=document.getElementById("Para").getAttribute("style");
//console.log(element);

//set method
//var element;
// element=document.getElementsByClassName("right").innerHTML="<h1>By By</h1>"; //set the value by by
//document.getElementById("h1").attributes[1].value="srd";
//element=document.getElementById("h1").getAttribute("class");
//element=document.getElementById("Para").getAttribute("style");
//console.log(element);

//Qury selector
// var element;
// //document.querySelector("#h1").innerHTML= "<h1>Hello</h1>"
// element=document.querySelector("h1").getAttribute("class");
// element=document.querySelectorAll(".right");

// console.log(element);

//Styling method
// var element;
// element=document.querySelector(".right").style.backgroundColor="red";

// var element;
// document.querySelector("#h1").className="sss rrr";
// element=document.querySelector("#h1").className;
// console.log(element);

// var element;
// document.querySelector("#h1").classList.add("rrr","dd");
// document.querySelector("#h1").classList.remove("rrr");
// element=document.querySelector("#h1").classList;
// console.log(element);

// var element;
// document.getElementById("Para").addEventListener("click",para);
// function para(){
//     document.getElementById("Para").classList.add("xx");
// };

var element;
document.getElementById("Para").addEventListener("click",para);
function para(){
    document.getElementById("Para").classList.toggle("xx");
    var a = document.getElementById("Para").classList;
    console.log(a);
};