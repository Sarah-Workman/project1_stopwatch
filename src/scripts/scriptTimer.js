let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;
let time;
let statusCheck = 0;
let outputseconds;
let outputminutes;
let outputhours;

document.getElementById("addTimer").addEventListener("click", function () {
	let inputForm = document.getElementById("timerFormSec");
	$(document).ready(function () {
		$(inputForm).css("display", "block");
	});
});

document.getElementById("formBtn").addEventListener("click", function () {
	$(document).ready(function () {
		let hide = document.getElementById("timerFormSec");
		$(hide).css("display", "none");
	});

	//get variables from form
	hours = document.getElementById("timerHours").value;
	minutes = document.getElementById("timerMinutes").value;
	seconds = document.getElementById("timerSeconds").value;

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
}); //end of function

document.getElementById("startTimer").addEventListener("click", function () {}); //end of function

document.getElementById("pauseTimer").addEventListener("click", function () {
	clearInterval(timerInterval);
	document.getElementById("inputSeconds").innerHTML = seconds;
	document.getElementById("inputMinutes").innerHTML = minutes;
	document.getElementById("inputHours").innerHTML = hours;
}); //end of function
