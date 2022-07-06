let seconds = null;
let minutes = null;
let hours = null;
let startTimer = null;
let time = null;
let statusCheck = 0;
let outputseconds;
let outputminutes;
let outputhours;

//connection to button
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);

//functions
function start() {
	if (statusCheck === 0) {
		statusCheck = 1;
		//interval
		startTimer = setInterval(function () {
			seconds++;

			if (seconds <= 9) {
				outputseconds = "0" + seconds;
				document.getElementById("seconds").innerHTML = outputseconds;
			} else if (seconds <= 60) {
				outputseconds = seconds;
				document.getElementById("seconds").innerHTML = outputseconds;
			} else if (seconds >= 60) {
				minutes++;
				outputseconds = "00";
				outputminutes = "0" + minutes;
				document.getElementById("seconds").innerHTML = outputseconds;
				document.getElementById("minutes").innerHTML = outputminutes;
				seconds = 0;
			} else if (minutes >= 9) {
				outputminutes = minutes;
				document.getElementById("minutes").innerHTML = outputminutes;
			} else if (minutes >= 60) {
				hours++;
				outputminutes = "00";
				outputhours = "0" + hours;
				document.getElementById("minutes").innerHTML = outputminutes;
				document.getElementById("hours").innerHTML = outputhours;
				minutes = 0;
			} else if (hours > 9) {
				outputhours = hours;
				document.getElementById("hours").innerHTML = outputhours;
			}
		}, 1000); //end of interval
	} // end of if check

	//nested if check
	let startTime = "00";

	if (outputseconds > 0) {
		if (outputminutes > 0) {
			if (outputhours > 0) {
				return outputhours + ":" + outputminutes + ":" + outputseconds;
			} else {
				return startTime + ":" + outputminutes + ":" + outputseconds;
			} // hours
		} else {
			return startTime + ":" + startTime + ":" + outputseconds;
		} //minutes
	} else {
		return startTime + ":" + startTime + ":" + startTime;
	} // end of nested if seconds
} //end of start function

function stop() {
	clearInterval(startTimer);
	statusCheck = 0;
}

function reset() {
	clearInterval(startTimer);
	document.getElementById("seconds").innerHTML = "00";
	document.getElementById("minutes").innerHTML = "00";
	document.getElementById("hours").innerHTML = "00";

	seconds = 0;
	minutes = 0;
	hours = 0;

	statusCheck = 0;
}

function lap() {
	statusCheck = 1;
	let lapTime = start();
	document.getElementById("lap-text").innerHTML = lapTime;
}
