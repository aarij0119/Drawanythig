const canvas = document.querySelector('#whiteboard');
const context = canvas.getContext('2d')
const buttons = document.querySelectorAll('#btn1');
const circle = document.querySelector('#circle')


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