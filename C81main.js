canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(250, 270, 50, 0, 2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(310, 330, 50, 0, 2*Math.PI);
ctx.stroke();

color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(370, 270, 50, 0, 2*Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(430, 330, 50, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(490, 270, 50, 0, 2*Math.PI);
ctx.stroke();

function my_mousedown(e){
    
 
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    circle(mouse_x, mouse_y);
}
