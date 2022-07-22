let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;
let time;
let statusCheck = 0;
let outputseconds;
let outputminutes;
let outputhours;

//form is opened
document.getElementById("addTimer").addEventListener("click", function () {
	let inputForm = document.getElementById("timerFormSec");
	$(document).ready(function () {
		$(inputForm).css("display", "block");
	});
});

//form btn is pressed and values are grabed. hide and start function start with values returned.
document.getElementById("formBtn").addEventListener("click", function () {
	hours = document.getElementById("timerHours").value;
	minutes = document.getElementById("timerMinutes").value;
	seconds = document.getElementById("timerSeconds").value;
	hide();
	start();
	return seconds + minutes + hours;
});

//hides the form
function hide() {
	let hide = document.getElementById("timerFormSec");
	$(hide).css("display", "none");
}

//starts the main timer function
function start() {
	// the start of the main timer function. I planned on doing the opposite of the stopwatch using the passed value as the starting point for countdown.
	if (statusCheck === 0) {
		statusCheck = 1;
		let seclength = seconds.toString.length;
		let minlength = minutes.toString.length;
		let hourlength = hours.toString.length;

		//interval
		timerInterval = setInterval(function () {
			if (seconds < 60 && seconds > 0) {
				document.getElementById("inputSeconds").innerHTML = seconds;
				document.getElementById("inputMinutes").innerHTML = minutes;
				document.getElementById("inputHours").innerHTML = hours;
				seconds--;
			} else if (minutes < 60 && minutes > 0) {
				document.getElementById("inputMinutes").innerHTML = minutes;
				document.getElementById("inputSeconds").innerHTML = seconds;
				document.getElementById("inputHours").innerHTML = hours;
				minutes--;
				seconds = 59;
			} else if (hours < 60 && hours > 0) {
				document.getElementById("inputHours").innerHTML = hours;
				document.getElementById("inputMinutes").innerHTML = minutes;
				document.getElementById("inputSeconds").innerHTML = seconds;
				hours--;
				minutes = 59;
			}

			//redex to see if two digits?
		}, 1000); //empty function
		outputhours = hours;
		outputminutes = minutes;
		outputseconds = seconds;
		return hours + minutes + seconds;
	} //end of first if check
} //end of function

document.getElementById("startTimer").addEventListener("click", function () {
	clearInterval(timerInterval);
	statusCheck = 0;
	start();
}); //end of function

document.getElementById("pauseTimer").addEventListener("click", function () {
	clearInterval(timerInterval);
	statusCheck = 0;
	document.getElementById("inputSeconds").innerHTML = seconds;
	document.getElementById("inputMinutes").innerHTML = minutes;
	document.getElementById("inputHours").innerHTML = hours;
}); //end of function

document.getElementById("resetTimer").addEventListener("click", function () {
	let startTimer = "00";
	statusCheck = 0;
	clearInterval(timerInterval);
	document.getElementById("inputSeconds").innerHTML = startTimer;
	document.getElementById("inputMinutes").innerHTML = startTimer;
	document.getElementById("inputHours").innerHTML = startTimer;
});
