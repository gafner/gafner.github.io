window.onload = () => {
  const canvas = document.getElementById("paper");
  canvas.setAttribute("style", "background-color: rgba(1, 1, 1, 0.9);");
  const cxt = canvas.getContext("2d");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  cxt.canvas.width = window.innerWidth;
  cxt.canvas.height = window.innerHeight;
  cxt.strokeStyle = "white";

  let d = 1.02021;
  let k = 4.011151;

  let spiralCount = 0;
  let prevX = window.innerWidth / 2;
  let prevY = window.innerHeight / 2;
  let STEPS_PER_ROTATION = 3;
  let increment = (4 * Math.PI) / STEPS_PER_ROTATION;
  let theta = increment;
  let counter = 0;
  let radius = theta;

  function drawSpiral(mod, x, y) {
    cxt.beginPath();
    cxt.moveTo(prevX, prevY);

    let newX = centerX + radius * Math.cos(theta - mod);
    let newY = centerY + radius * Math.sin(theta - mod);
    cxt.lineTo(newX, newY);

    theta = theta + increment;
    radius = radius * d + k;
    prevX = newX;
    prevY = newY;
    cxt.stroke();
  }

  let speed = 1;
  let r = 240;
  let g = 240 / STEPS_PER_ROTATION;
  let b = 240;
  let maxCount = 23;

  setInterval(function () {
    if (radius > window.innerWidth / 0.5) {
      spiralCount += 1;
      prevX = centerX;
      prevY = centerY;
      theta = increment + Math.PI / 3;
      radius = increment;

      cxt.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
    }
    if (spiralCount === maxCount) {
      spiralCount = 0;
      cxt.setLineDash([14, 2]);
      cxt.clearRect(0, 0, canvas.width, canvas.height);
      d = Math.random() * 2 + 1.019;
      r = 225;
      g = 255 / d;
      b = 255 / d;
      STEPS_PER_ROTATION = Math.floor(Math.random() * 5 + 2);
      increment =
        (Math.floor(Math.random() * 10 + 2) * Math.PI) / STEPS_PER_ROTATION;
      maxCount = Math.floor(Math.random() * increment + 50 + 4);
      k = Math.random() * 7 + 1;
    }
    counter += 1.08;
    drawSpiral(counter, prevX, prevY);
  }, 1);
};
