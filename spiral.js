var canvas = $("#paper")[0];
$("#paper").css('background-color', 'rgba(1, 1, 1, 0.9)');
var c = canvas;
var cxt = c.getContext("2d");
var centerX = window.innerWidth/2;
var centerY = window.innerHeight/2;
var spiralCount = 0;
cxt.canvas.width  = window.innerWidth;
cxt.canvas.height = window.innerHeight;

var prevX = window.innerWidth/2;
var prevY = window.innerHeight/2;
var STEPS_PER_ROTATION = 3;
var increment = 4 * Math.PI / STEPS_PER_ROTATION;
var theta = increment;
var counter = 0;
var radius = theta;
var d = 1.02021;
var k = 4.011151;
cxt.strokeStyle = 'white';
function DrawSpiral(mod) {
    // d = Math.random()+1;
    // k = Math.random();

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
var r = 240//Math.floor(255);
var g = 240//Math.floor(Math.random()*0+50);
var b = 240//Math.floor(Math.random()*0+50);
var maxCount = 3
setInterval(function() {

    if (radius > window.innerWidth/1.1) {
        spiralCount += 1;
        prevX = centerX;
        prevY = centerY;
        theta = increment + Math.PI/3;
        radius = increment;

        // cxt.strokeStyle="rgb("+r+","+g+","+b+")";
        cxt.strokeStyle="rgb("+r+","+g+","+b+")";

    }
    if (spiralCount === maxCount) {
        spiralCount = 0;
        cxt.setLineDash([14, 2]);
        cxt.clearRect(0, 0, c.width, c.height);
        d = Math.random()*2 + 1.019
        r = 225//0200
        g = 255//Math.floor(Math.random()*1+205);
        b = 255//Math.floor(Math.random()*200+50);
        STEPS_PER_ROTATION = Math.floor(Math.random()*5 +2)
        increment = Math.floor(Math.random()*10 +2) * Math.PI / STEPS_PER_ROTATION;
        maxCount = Math.floor(Math.random()*increment + 50 + 4)
        k = Math.random()*7+1;
    }
    DrawSpiral(counter, prevX, prevY);
    counter += 0.08;
}, interval);
