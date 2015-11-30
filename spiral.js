var canvas = $("#paper")[0];
$("#paper").css('background-color', 'rgba(1, 1, 1, 0.9)');
var c = canvas;
var cxt = c.getContext("2d");
var centerX = window.innerWidth/2;
var centerY = window.innerHeight/2;

cxt.canvas.width  = window.innerWidth;
cxt.canvas.height = window.innerHeight;

var prevX = window.innerWidth/2;
var prevY = window.innerHeight/2;
var STEPS_PER_ROTATION = 3;
var increment = 2 * Math.PI / STEPS_PER_ROTATION;
var theta = increment;
var counter = 0;
var radius = theta;
var d = 1.021;
var k = 0.051;
cxt.strokeStyle = 'blue';
function DrawSpiral(mod) {

    // cxt.save();
    // cxt.clearRect(0, 0, c.width, c.height);
    //cxt.setLineDash([14, 2]);
    
    cxt.beginPath();
    cxt.moveTo(prevX, prevY);    

    var newX = centerX + radius * Math.cos(theta - mod);
    var newY = centerY + radius * Math.sin(theta - mod);
    cxt.lineTo(newX, newY);
    
    theta = theta + increment;
    radius = (radius*d) + k;
    // d -= 0.1;
    // radius * x
    // rx, rx2, rx3, rx4
    // rx1, rx1x2, rx1x2x3
    prevX = newX;
    prevY = newY;
    cxt.stroke();
	// cxt.restore();
    
}

var speed = 1;
var interval = speed/STEPS_PER_ROTATION;

setInterval(function() {
    if (radius > window.innerWidth/1.2) {
        prevX = centerX;
        prevY = centerY;
        theta = increment + Math.PI/3;
        radius = increment;
        var r = Math.floor(Math.random()*70+180);
        var g = Math.floor(Math.random()*20+20);
        var b = Math.floor(Math.random()*100+100);
        cxt.strokeStyle="rgb("+r+","+g+","+b+")";

    }
    DrawSpiral(counter, prevX, prevY);
    counter += 0.0104;
}, interval);
