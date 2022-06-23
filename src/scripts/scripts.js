let seconds = null;
let minutes = null;
let hours = null;

let outputseconds;
let outputminutes;
let outputhours;

//connection to button
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

//functions
function start() {
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
	}, 1000);
} //end of start function

function stop() {
	clearInterval(startTimer);
}
function reset() {
	clearInterval(startTimer);
	document.getElementById("seconds").innerHTML = "00";
	document.getElementById("minutes").innerHTML = "00";
	document.getElementById("hours").innerHTML = "00";

	seconds = 0;
	minutes = 0;
	hours = 0;
}
