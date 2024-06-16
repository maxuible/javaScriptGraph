
window.addEventListener("load", function () {

    const HEIGHT = 500;
    const WIDTH = 500;
    const STEP = 10;

    const canvas = document.getElementById("window");
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    let ctx = canvas.getContext("2d");

    const btnClear = document.getElementById("clear");
    btnClear.addEventListener("click", ClearCanvas())

    function ClearCanvas(){
        
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    const btnT1 = document.getElementById("t1");
    btnClear.addEventListener("click", function () {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

    })

    ctx.beginPath();
    for (let i = 0; i < WIDTH; i += 10) {
        ctx.strokeStyle = "limegreen";
        ctx.moveTo(i, 0);
        ctx.lineTo(0, HEIGHT - i);
    }

    for (let i = 0; i < WIDTH; i += STEP) {
        ctx.moveTo(i, HEIGHT);
        ctx.lineTo(0, i);
    }

    for (let i = 0; i < WIDTH; i += STEP) {
        ctx.moveTo(HEIGHT, i);
        ctx.lineTo(WIDTH - i, HEIGHT);
    }

    for (let i = 0; i < WIDTH; i += STEP) {
        ctx.moveTo(HEIGHT, i);
        ctx.lineTo(i, 0);
    }

    ctx.stroke();


})