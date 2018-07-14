var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Score=0;
var p2Score=0;
var gameOver = false;
var winningScore=5;
var resetButton= document.getElementById("p3");
var numInput= document.querySelector("input");

var winningScoreDisplay = document.getElementById("maxScore");

p1Button.addEventListener("click",function(){
	//alert('clicked');
	if (!gameOver) {
		p1Score++;
		if (winningScore==p1Score) {
			gameOver=true;
			p1Display.classList.add("winner")
		}
	}
	p1Display.textContent=p1Score;
});

p2Button.addEventListener("click",function() {
	if (!gameOver) {
		p2Score++;
		if (winningScore==p2Score) {
			gameOver=true;
			p2Display.classList.add("winner");
		}
	}
	p2Display.textContent=p2Score;
});

resetButton.addEventListener("click",function() {
	resetGame();
});


numInput.addEventListener("change",function() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore=Number(numInput.value);
});

function resetGame() {
	// body...
	p1Score=0;
	p2Score=0;
	p1Display.textContent=p1Score;
	p2Display.textContent=p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}