function drawButton(text, x, y) {
    // let canvas = document.getElementById("canvas");
    // let ctx = canvas.getContext("2d");
    ctx.stroke = 'orange';
    ctx.lineCap = 'round';
    ctx.lineWidth = 40;
    ctx.fillStyle = 'white';
    ctx.font = '24px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let width = ctx.measureText(text).width;

    ctx.beginPath();
    ctx.moveTo(x+20, y+20);
    ctx.lineTo(x+220+width, y+20);
    ctx.stroke();

    ctx.fillText(text, x+20+width/2, y+20);
}