let seconds;
let minutes;
let hours;
let startTimer;
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

		//interval
		timerInterval = setInterval(function () {
			if (seconds < 60 && seconds > 0) {
				seconds--;
				// put seconds on screen with 0 place holder
				outputseconds = seconds;
				document.getElementById("inputSeconds").innerHTML = outputseconds;

				// static minutes and hours
				document.getElementById("inputMinutes").innerHTML = minutes;
				document.getElementById("inputHours").innerHTML = hours;
			} //check to see if minute is over
			else if (minutes < 60 && minutes > 0) {
				minutes--;

				if (seconds === 0) {
					seconds = 59;
					outputminutes = minutes;

					document.getElementById("inputMinutes").innerHTML = outputminutes;
					document.getElementById("inputSeconds").innerHTML = seconds;

					// to check if the hour is over
				}
			} else if (hours < 60 && hours > 0) {
				hours--;

				if (minutes === 0) {
					minutes = 59;
					outputhours = hours;
					outputminutes = minutes;
					outputseconds = seconds;
					document.getElementById("inputhours").innerHTML = outputhours;
					document.getElementById("inputMinutes").innerHTML = outputseconds;
					document.getElementById("inputSeconds").innerHTML = outputseconds;
				}
			}

			//redex to see if two digits?
		}, 1000); //empty function
	} //end of first if check
}); //end of function
