const canvas = document.querySelector('#whiteboard');
const context = canvas.getContext('2d');
const circleButton = document.querySelector('#circle');
const triangleButton = document.querySelector('#triangle');
const lineButton = document.querySelector('#line');
const squareButton = document.querySelector('#square');
const rectangleButton = document.querySelector('#rectangle');
const clearButton = document.querySelector('#clear');
const undoButton = document.querySelector('#undo');
const buttons = document.querySelectorAll('#btn1');
const colorPicker = document.querySelector('#color'); 
const fillButton = document.querySelector('#fill');


let drawMode = "line";
let isDraw = false;
let linewidth = 2;
let drawColor = "#fff";

window.addEventListener('load', function () {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        linewidth = e.target.value;
    });
});

colorPicker.addEventListener("input", function (e) {
    drawColor = e.target.value;
});

const drawCircle = (e) => {
    if (drawMode === 'circle') {
        let radius = 50;
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
        context.lineWidth = linewidth;
        context.strokeStyle = drawColor;
        context.fillStyle = drawColor;
        context.fill();
        context.stroke();
    }
};

const drawSquare = (e) => {
    if (drawMode === 'square') {
        let size = 100;
        context.beginPath();
        context.rect(e.offsetX - size / 2, e.offsetY - size / 2, size, size);
        context.lineWidth = linewidth;
        context.strokeStyle = drawColor;
        context.fillStyle = drawColor;
        context.fill();
        context.stroke();
    }
};

const drawRectangle = (e) => {
    if (drawMode === 'rectangle') {
        let width = 150;
        let height = 100;
        context.beginPath();
        context.rect(e.offsetX - width / 2, e.offsetY - height / 2, width, height);
        context.lineWidth = linewidth;
        context.strokeStyle = drawColor;
        context.fillStyle = drawColor;
        context.fill();
        context.stroke();
    }
};

const drawTriangle = (e) => {
    if (drawMode === 'triangle') {
        let size = 100;
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY - size / 2);
        context.lineTo(e.offsetX - size / 2, e.offsetY + size / 2);
        context.lineTo(e.offsetX + size / 2, e.offsetY + size / 2);
        context.closePath();
        context.lineWidth = linewidth;
        context.strokeStyle = drawColor;
        context.fillStyle = drawColor;
        context.fill();
        context.stroke();
    }
};

const StartDraw = (e) => {
    if (drawMode === 'line') {
        isDraw = true;
        context.beginPath();
        context.lineWidth = linewidth;
        context.strokeStyle = drawColor;
    }
};

const Draw = (e) => {
    if (drawMode === 'line' && isDraw) {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
    }
};

circleButton.addEventListener("click", function () {
    drawMode = "circle";
});

squareButton.addEventListener("click", function () {
    drawMode = "square";
});

triangleButton.addEventListener("click", function () {
    drawMode = "triangle";
});

rectangleButton.addEventListener("click", function () {
    drawMode = "rectangle";
});

clearButton.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

const redraw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    actions.forEach(action => action());
};

lineButton.addEventListener("click", function () {
    drawMode = "line";
});
const fillShape = (e) => {
    context.fillStyle = drawColor;
    context.fill();
};

fillButton.addEventListener("click", fillShape);


canvas.addEventListener('mousemove', Draw);
canvas.addEventListener('mousedown', StartDraw);
canvas.addEventListener('mousedown', drawCircle);
canvas.addEventListener('mousedown', drawSquare);
canvas.addEventListener('mousedown', drawRectangle);
canvas.addEventListener('mousedown', drawTriangle);
canvas.addEventListener('mouseup', () => isDraw = false);
