let seconds = 0;
let minutes = 0;
let hours = 0;
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
				// if the length is less then two add a zero in from of value
				for (let a = seconds.toString.length; a < 2; a++) {
					outputseconds = "0" + seconds;

					for (let b = minutes.toString.length; b < 2; b++) {
						outputminutes = "0" + minutes;

						for (let c = hours.toString.length; c < 2; c++) {
							outputhours = "0" + hours;
						}
					}
				}
				//remove any extra zeros
				if (outputseconds.length > 2) {
					outputseconds = outputseconds.replace("0", "");
					if (outputminutes.length > 2) {
						outputminutes = outputminutes.replace("0", "");
					}
				}
				//display time and main function of timer
				document.getElementById("inputSeconds").innerHTML = outputseconds;
				document.getElementById("inputMinutes").innerHTML = outputminutes;
				document.getElementById("inputHours").innerHTML = outputhours;
				seconds--;
			} else if (minutes < 60 && minutes > 0) {
				// if the length is less then two add a zero in from of value
				for (let a = seconds.toString.length; a < "2"; a++) {
					console.log("a is: " + a);
					outputseconds = 0 + seconds;

					for (let b = minutes.toString.length; b < "2"; b++) {
						console.log("b is: " + b);
						outputminutes = 0 + minutes;

						for (let c = hours.toString.length; c < "2"; c++) {
							console.log("c is: " + c);
							outputhours = 0 + hours;
						}
					}
				}
				//remove any extra zeros
				if (outputminutes.length > 2) {
					outputminutes = outputminutes.replace("0", "");
				}

				//display time and continue main function of timer
				document.getElementById("inputMinutes").innerHTML = outputminutes;
				document.getElementById("inputSeconds").innerHTML = outputseconds;
				document.getElementById("inputHours").innerHTML = outputhours;
				minutes--;
				seconds = 59;
			} else if (hours < 60 && hours > 0) {
				// if the length is less then two add a zero in from of value
				for (let a = seconds.toString.length; a < "2"; a++) {
					outputseconds = 0 + seconds;

					for (let b = minutes.toString.length; b < "2"; b++) {
						outputminutes = 0 + minutes;

						for (let c = hours.toString.length; c < "2"; c++) {
							outputhours = 0 + hours;
						}
					}
				}
				//display time and continue main function of timer
				if (outputminutes.length > 2) {
					outputminutes = outputminutes.replace("0", "");
				}
				document.getElementById("inputHours").innerHTML = outputhours;
				document.getElementById("inputMinutes").innerHTML = outputminutes;
				document.getElementById("inputSeconds").innerHTML = outputhours;
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
