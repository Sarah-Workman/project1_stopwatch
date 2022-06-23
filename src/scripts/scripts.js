let seconds = null;
let minutes = null;
let hours = null;

let outputseconds;
let outputminutes;
let outputhours;

//connection to button
document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("stop").addEventListener("click", stop);

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
		} else if (minutes > 60) {
			hours++;
			outputhours = 0 + hours;
			document.getElementById("hours").innerHTML = outputhours;
		} else if (hours > 9) {
			outputhours = hours;
			document.getElementById("hours").innerHTML = outputhours;
		}
	}, 1000);
} //end of start function

function pause() {}
function stop() {}
