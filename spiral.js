var canvas = $("#paper")[0];
$("#paper").css('background-color', 'rgba(1, 1, 1, 0.9)');

var c = canvas.getContext("2d");

    var c = canvas
    var cxt = c.getContext("2d");
    var centerX = window.innerWidth/2;
    var centerY = window.innerHeight/2;
 cxt.canvas.width  = window.innerWidth;
  cxt.canvas.height = window.innerHeight;
function DrawSpiral(mod) {

    cxt.save();
    cxt.clearRect(0, 0, c.width, c.height);
    cxt.setLineDash([14, 2]);
    cxt.beginPath();
    cxt.moveTo(centerX, centerY);
    var STEPS_PER_ROTATION = 3;
    var increment = 2 * Math.PI / STEPS_PER_ROTATION;
    var theta = increment;

    while (theta < counter * Math.PI) {
        var newX = centerX + theta * Math.cos(theta - mod-44);
        var newY = centerY + theta * Math.sin(theta - mod);
        cxt.lineTo(newX, newY);
        theta = theta + increment;
	}
    cxt.stroke();
	cxt.restore();
}

var counter = 0;



setInterval(function(){
cxt.strokeStyle="rgb("+Math.floor(Math.random()*155+100)+","+Math.floor(Math.random()*155+100)+","+Math.floor(Math.random()*155+100)+")";
},1000);
setInterval(function() {
    DrawSpiral(counter);
    counter += 0.015;
}, 1);
