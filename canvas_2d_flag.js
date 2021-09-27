
// html code
<canvas id="canvas" width="300" height="280"></canvas>
 
// JS code 

var canvas = document.getElementById("canvas");

var cntx = canvas.getContext("2d");

cntx.lineWidth = 3;
cntx.strokeStyle = "black";
cntx.strokeRect(10, 10, 376, 276);

cntx.fillStyle = "green";
cntx.fillRect(12, 12, 380, 280);

var rct_width = canvas.width / 2;
var rct_height = canvas.height / 2;

cntx.beginPath();
cntx.arc(rct_width, rct_height, 80, 0, 2 * Math.PI, false);
cntx.fillStyle = "red";
cntx.fill();
cntx.strokeStyle();



