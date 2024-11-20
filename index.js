// const canvas = document.getElementById('whiteboard');
// const context = canvas.getContext('2d');

// canvas.width = 900; 
// canvas.height = 700;

// let drawing = false;

// function startDrawing(e) {
//     drawing = true;
//     draw(e);
// }

// function stopDrawing() {
//     drawing = false;
//     context.beginPath();
// }

// function draw(e) {
//     if (!drawing) return;
//     context.lineWidth = 4;
//     context.lineCap = 'round';
//     context.strokeStyle = 'black';

//     context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
//     context.stroke();
//     context.beginPath();
//     context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
// }

// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mouseup', stopDrawing);
// canvas.addEventListener('mousemove', draw);

// document.getElementById('clear').addEventListener('click', () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);
// });

const canvas = document.querySelector('#whiteboard');
const context = canvas.getContext('2d')
const buttons = document.querySelectorAll('#btn1');



let isDraw = false;
let linewidth = 2

window.addEventListener('load',function(){
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

// context.beginPath();

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
     linewidth = e.target.value
    })
})

const StartDraw = () => {
    isDraw = true
    context.beginPath();
    context.lineWidth = linewidth
}

const Draw = (e) =>{
    if(!isDraw) return
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke()
}

canvas.addEventListener('mousemove', Draw)
canvas.addEventListener('mousedown', StartDraw)
canvas.addEventListener('mouseup', ()=> isDraw = false)