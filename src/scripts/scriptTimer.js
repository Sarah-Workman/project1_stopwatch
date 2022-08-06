let seconds;
let minutes;
let hours;
let timerInterval = null;
let time = [];

let isRunning = false;
let outputseconds = "";
let outputminutes = "";
let outputhours = "";

//form is opened
document.getElementById("addTimer").addEventListener("click", () => {
	let inputForm = document.getElementById("timerFormSec");
	$(document).ready(function () {
		$(inputForm).css("display", "block");
	});
});

//form btn is pressed and values are grabed. hide and start function start with values returned.
document.getElementById("formBtn").addEventListener("click", () => {
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

//starts the main timer function. Opposite of the stopwatch using the passed value as the starting point for countdown.
function start() {
	if (isRunning === false) {
		statusCheck = true;

		//interval
		timerInterval = setInterval(() => {
			if (seconds < 60 && seconds > 0) {
				// set value to be printed if > 9

				outputseconds = seconds;
				outputminutes = minutes;
				outputhours = hours;

				//check and see if any are below 9 but greater then 0 to add placeholder
				placeholder();

				document.getElementById("inputSeconds").innerHTML = outputseconds;
				document.getElementById("inputMinutes").innerHTML = outputminutes;
				console.log(
					"outputminutes: " + outputminutes + "outputhours: " + outputminutes
				);
				document.getElementById("inputHours").innerHTML = outputhours;

				//timer function
				seconds--;
			} else if (minutes < 60 && minutes > 0) {
				// set value to be printed if > 9

				outputseconds = seconds;
				outputminutes = minutes;
				outputhours = hours;

				//check and see if any are below 9 but greater then 0 to add placeholder
				placeholder();

				document.getElementById("inputMinutes").innerHTML = outputminutes;
				document.getElementById("inputSeconds").innerHTML = outputseconds;
				document.getElementById("inputHours").innerHTML = outputhours;

				minutes--;
				seconds = 59;
			} else if (hours < 60 && hours > 0) {
				// set value to be printed if > 9
				outputseconds = seconds;
				outputminutes = minutes;
				outputhours = hours;

				//check and see if any are below 9 but greater then 0 to add placeholder
				placeholder();

				document.getElementById("inputHours").innerHTML = outputhours;
				document.getElementById("inputMinutes").innerHTML = outputminutes;
				document.getElementById("inputSeconds").innerHTML = outputseconds;

				hours--;
				minutes = 59;
			}

			//redex to see if two digits?
		}, 1000); //empty function

		// return values to pass to pause timer

		return (
			seconds + minutes + hours + outputseconds + outputminutes + outputhours
		);
	} //end of first if check
} //end of function

document.getElementById("startTimer").addEventListener("click", () => {
	clearInterval(timerInterval);
	statusCheck = false;
	start();
}); //end of function

document.getElementById("pauseTimer").addEventListener("click", () => {
	clearInterval(timerInterval);
	statusCheck = false;
	document.getElementById("inputSeconds").innerHTML = outputseconds;
	document.getElementById("inputMinutes").innerHTML = outputminutes;
	document.getElementById("inputHours").innerHTML = outputhours;
}); //end of function

document.getElementById("resetTimer").addEventListener("click", () => {
	let startTimer = "00";
	statusCheck = false;
	clearInterval(timerInterval);
	document.getElementById("inputSeconds").innerHTML = startTimer;
	document.getElementById("inputMinutes").innerHTML = startTimer;
	document.getElementById("inputHours").innerHTML = startTimer;
}); //end of function

function placeholder() {
	if (
		(seconds <= 9 && seconds > 0) ||
		(minutes <= 9 && minutes > 0) ||
		(hours <= 9 && hours > 0)
	) {
		for (let a = seconds; a <= 9 && a > 0; a++) {
			outputseconds = "0" + seconds;
			console.log(
				"you're in seconds seconds, output seconds is" + outputseconds
			);

			for (let b = minutes; b <= 9 && b > 0; b++) {
				outputminutes = "0" + minutes;
				console.log(
					"you're in seconds minutes, output minutes is" + outputminutes
				);

				for (let c = hours; c <= 9 && c > 0; c++) {
					outputhours = "0" + hours;
					console.log("you're in seconds hours, output hours" + outputhours);
				}
			}
		}
	}
	return outputseconds + outputminutes + outputhours;
}
