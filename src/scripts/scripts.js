let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let outputseconds = null;

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
			outputseconds = 0 + seconds;
			document.getElementById("seconds").innerHTML = outputseconds;
		}
		if (seconds < 99) {
		}
	}, 1000);
}
function pause() {}
function stop() {}
