let getTime = null;

window.onload = function () {
	getTime = setInterval(function () {
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes();
		document.getElementById("timeText").innerHTML = time;
	}, 1000);
};
