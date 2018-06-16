/*selecting objects*/
var playingTo = document.querySelector("input[type='number']");
var playingToText = document.querySelector(".playingTo");

/*Manipulating*/
playingTo.addEventListener('click',function(){
playingToText.innerText = this.value;
})
