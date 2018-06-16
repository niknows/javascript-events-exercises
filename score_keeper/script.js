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
buttonToText(p1Button,playerOneScore);

/*Player two button adds to score*/
buttonToText(p2Button,playerTwoScore);

/*Reset button event*/
resetButton.addEventListener('click',function(){
console.log("clicked");
reset();   
});



/*--FUNCTIONS--*/
function buttonToText(playerButton, playerScore){
    playerButton.addEventListener('click',function(){
    playerScore.innerText = Number(playerScore.innerText) + 1;
    });       
    }

function reset(){
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    playingTo.value = 0;
    playingToText.innerText = 0;
}