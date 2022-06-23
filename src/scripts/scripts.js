let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
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
		if (seconds < 09) {
			outputseconds = "0" + seconds;
			document.getElementById("seconds").innerHTML = outputseconds;
		} else if (seconds < 99) {
			outputseconds = seconds;
			document.getElementById("seconds").innerHTML = outputseconds;
		} else if (seconds > 99) {
			minutes++;
			outputminutes = 0 + minutes;
			document.getElementById("minutes").innerHTML = outputminutes;
		} else if (minutes > 9) {
			outputminutes = minutes;
			document.getElementById("minutes").innerHTML = outputminutes;
		} else if (minutes > 99) {
			hours++;
			outputhours = 0 + hours;
			document.getElementById("hours").innerHTML = outputhours;
		} else if (hours > 9) {
			outputhours = hours;
			document.getElementById("hours").innderHTML = outputhours;
		}
	}, 1000);
} //end of start function

function pause() {}
function stop() {}
