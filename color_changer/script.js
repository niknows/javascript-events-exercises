//Selecting elements
var button = document.querySelector("#button");
var body = document.querySelector("body");

//Button listens for a click and change body  bg color
button.addEventListener("click",function(){
body.classList.toggle("toggle");
});
