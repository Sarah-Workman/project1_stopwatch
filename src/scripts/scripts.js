let seconds = 0;
let minutes = null;
let hours = null;
let startTimer = null;
let time = null;
let isRunning = Boolean(false);

let x;
let outputseconds;
let outputminutes;
let outputhours;

//connection to button
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
document.getElementById("resetLaps").addEventListener("click", resetLaps);

//functions
function start() {
	if (isRunning === false) {
		isRunning = true;

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

	// should this be seperated out as a function???
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
	isRunning = false;
}

function reset() {
	clearInterval(startTimer);
	document.getElementById("seconds").innerHTML = "00";
	document.getElementById("minutes").innerHTML = "00";
	document.getElementById("hours").innerHTML = "00";

	seconds = 0;
	minutes = 0;
	hours = 0;

	isRunning = false;
}

function lap() {
	if (isRunning === true) {
		//initialize time
		let lapTime = [start()];
		//create connection to div
		let lapContainer = document.getElementById("lapContainer");
		// how to check if they equal each other

		//create element
		const para = document.createElement("p");

		//how many laps have been created
		let i = document.getElementById("lapContainer").childElementCount;
		let index = [i];
		//create an index that will add an id to paragraph
		para.id = index;

		let lastItem = lapTime[lapTime.length - 1];
		let currentItem = lapTime[lapTime.length];

		if (index[lastItem] != index[currentItem]) {
			//add the lap to text
			para.innerText = lapTime;

			lapContainer.appendChild(para);
		}
	}
}

function resetLaps() {
	$(lapContainer).empty();
	isRunning = false;
}
