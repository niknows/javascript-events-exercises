/*--SELECTION--*/
var playingTo = document.querySelector("input[type='number']");
var playingToText = document.querySelector(".playingTo");
var playerOneScore = document.querySelector(".playerOne");
var playerTwoScore = document.querySelector(".playerTwo");
var p1Button = document.querySelector(".p1Button");
var p2Button = document.querySelector(".p2Button");
var resetButton = document.querySelector(".reset");
//console.log(p1Button,p2Button);


/*--MANIPULATION--*/

/*Playing to section*/
playingTo.addEventListener('click',function(){
playingToText.innerText = this.value;
})

/*Player one button adds to score*/
p1Button.addEventListener('click',function(){
playerOneScore.innerText = Number(playerOneScore.innerText) + 1;
});

/*Player two button adds to score*/
p2Button.addEventListener('click',function(){
playerTwoScore.innerText = Number(playerTwoScore.innerText) + 1;
});

/*Reset button event*/
resetButton.addEventListener('click',function(){
console.log("clicked");
reset();   
});



/*--FUNCTIONS--*/

function reset(){
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    playingTo.value = 0;
}