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
				startingValue();
				console.log(
					"current values" + outputhours + outputminutes + outputseconds
				);
				//check and see if any are below 9 but greater then 0 to add placeholder
				placeholder();

				console.log(
					"current values, about to print..." +
						outputhours +
						outputminutes +
						outputseconds
				);

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

				startingValue();

				//check and see if any are below 9 but greater then 0 to add placeholder
				placeholder();

				document.getElementById("inputMinutes").innerHTML = outputminutes;
				document.getElementById("inputSeconds").innerHTML = outputseconds;
				document.getElementById("inputHours").innerHTML = outputhours;

				minutes--;
				seconds = 59;
			} else if (hours < 60 && hours > 0) {
				// set value to be printed if > 9
				startingValue();

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
		if (seconds <= 9 && seconds > 0) {
			outputseconds = "0" + seconds;
			console.log(
				"you're in seconds seconds, output seconds is" + outputseconds
			);
			if (minutes <= 9 && minutes > 0) {
				outputminutes = "0" + minutes;
				console.log(
					"you're in seconds minutes, output minutes is" + outputminutes
				);
				if (hours <= 9 && hours > 0) {
					outputhours = "0" + hours;
					console.log("you're in seconds hours, output hours" + outputhours);
				}
			}
		}
	}
	return outputseconds + outputminutes + outputhours;
}
function startingValue() {
	outputseconds = seconds;
	console.log("seconds seconds" + outputseconds);
	outputminutes = minutes;
	console.log("seconds minutes" + outputminutes);
	outputhours = hours;
	console.log("seconds hours" + outputhours);

	if (seconds === "" || minutes === "" || hours === "") {
		if (seconds === "") {
			outputseconds = "00";
		} else if (minutes === "") {
			outputminutes = "00";
		} else if (hours === "") {
			outputhours = "00";
		}
	}
	return outputseconds + outputminutes + outputhours;
}
