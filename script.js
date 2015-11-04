var homeGoalLine = 27;
var yard = 2.46;
var guestGoalLine = homeGoalLine + (yard * 100);
var startingYardLine;
var currYardLine;

$(document).ready(function() {
	var canvas = document.getElementById('game-field');	
	var context = canvas.getContext("2d");
	var run = yard * 10;
	startingYardLine = homeGoalLine + (yard * 20);
	currYardLine = startingYardLine;
	// newStartYardLine
	context.moveTo(currYardLine,20);
	context.lineTo(currYardLine + run, 20);
	currYardLine += run;
	context.lineWidth = 3;
	context.stroke();

	var pass = yard * 30;
	context.moveTo(currYardLine, 30);
	context.bezierCurveTo(
		currYardLine, 40-25,
		currYardLine + pass, 40-25,
		currYardLine + pass, 40);
	currYardLine += pass;
	context.stroke();
});