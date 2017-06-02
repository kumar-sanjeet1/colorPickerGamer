var numSquare = 6;
var colors = generateRandomColors(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function () {
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.background = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}

});




hardbtn.addEventListener("click", function () {
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < square.length; i++) {

		square[i].style.background = colors[i];
		square[i].style.display = "block";
	}
});







resetButton.addEventListener("click", function () {
	//generate all new colors
	colors = generateRandomColors(numSquare);

	//pick a new random colors from array 
	pickedColor = pickColor();
	//change color display to match color
	colorDisplay.textContent = pickedColor;

	//change colors of sqaure
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
});


colorDisplay.textContent = pickedColor;



for (var i = 0; i < square.length; i++) {

	//add initial colors to square 
	square[i].style.background = colors[i];

	//add click listner to square
	square[i].addEventListener("click", function () {

		//grab color to clicked sqaure
		var clickedColor = this.style.background;

		console.log(clickedColor, pickedColor);

		//compare color to pickedClot
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "play again?";


			changecolor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "play Again?"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});


}




function changecolor(color) {
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	}
}

function pickColor() {

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}




function generateRandomColors(num) {
	//make an array 
	var arr = [];


	//add num random color to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());

	}
	return arr;
	//return that array


}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//geeksforgeeks javascript
