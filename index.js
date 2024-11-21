const canvas = document.querySelector('#whiteboard');
const context = canvas.getContext('2d')
const buttons = document.querySelectorAll('#btn1');
const circle = document.querySelector('#circle');


let drawMode = "line";
let circle2 = 'circle'
let isDraw = false;
let linewidth = 2

window.addEventListener('load', function () {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

// context.beginPath();

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        linewidth = e.target.value
    })
})

const drwawCircle = (e) => {
    canvas.addEventListener('mousedown', drwawCircle)
    let radius = 50;
    context.beginPath()
    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2)
}

circle.addEventListener("click", function () {
    drwawCircle()
})

const StartDraw = () => {
    isDraw = true
    if (drawMode === 'line') {
        context.beginPath();
        context.lineWidth = linewidth
    }
}


const Draw = (e) => {
    if (!isDraw) return
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke()
}

canvas.addEventListener('mousemove', Draw)
canvas.addEventListener('mousedown', StartDraw)
canvas.addEventListener('contextmenu',drwawCircle )

canvas.addEventListener('mouseup', () => isDraw = false)