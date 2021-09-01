// var newElement = document.createElement("h2");
// var newText = document.createTextNode("this is best");

// newElement.appendChild(newText);
// //document.getElementById("test").appendChild(newElement);   ------APPEND CHILD

// var target = document.getElementById("test");
// target.insertBefore(newElement,target.childNodes[0]);   //---------INSERT BEFORE


//insertAdjacentElement create & append
// var newElement = document.createElement("h1");
// var newText = document.createTextNode("This is text");
// newElement.appendChild(newText);
// var target = document.getElementById("test");
//target.insertAdjacentElement("beforebegin",newElement);
//target.insertAdjacentElement("beforeend",newElement);
// target.insertAdjacentElement("afterend",newElement);
//target.insertAdjacentElement("afterbegin",newElement);

//InsertAdjacentHtML
// var target = document.getElementById("test");
// var newElement = "<h1>This is Text</h1>";
// target.insertAdjacentHTML("afterbegin",newElement);
// target.insertAdjacentHTML("afterend",newElement);

//InsertAdjancentText
// var target = document.getElementById("test");
// var newText = "This is heading";
// target.insertAdjacentText("afterbegin",newText);
//target.insertAdjacentText("beforebegin",newText);

//Replacechild

var newElement = document.createElement("li");
var newText = document.createTextNode("graps");
newElement.appendChild(newText);

var target = document.getElementById("list");
var oldElenent = target.children[0];
//target.replaceChild(newElement,oldElenent);
target.removeChild(oldElenent);
