var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var background = document.querySelector("body");
var button = document.querySelector(".randomize");

//set initial values of color1 and color2
color1.value = "#ff0000";
color2.value = "#ffff00";
//put initial values on gradient
setGradient();
//show css code of gradient
css.textContent = body.style.background + ";";

function getRandomHex() {
	//generate random number between 0 and 255
	var value= parseInt(Math.random() * (255 - 0) + 0);
	//convert generated number to hex
	var hexString = value.toString(16);
	//check if hex meets requirements and its length is 2
	if(hexString.length < 2) {
		hexString = "0" + hexString;
	}
	return hexString;
  }



function randomize() {
	//set first color
	color1.value = "#" + getRandomHex() + getRandomHex() + getRandomHex();
	//set second color
	color2.value = "#" + getRandomHex() + getRandomHex() + getRandomHex(); 
	//set background with new two colors
	setGradient();
}

button.addEventListener("click", randomize);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);