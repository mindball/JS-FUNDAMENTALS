function drawBall() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = 'red';
    let ball = {x: 0, y: 100};
    //first variant
    // let timer = setInterval(animate, 20);
    let directionX = true;  //for true move right
    let directionY = true;  //for true move down

    function animate() {
        ctx.clearRect(0, 0, 800, 600);

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 40, 0, Math.PI * 2);
        ctx.fill();

        if(directionX) {
            ball.x += 5;
            if(ball.x >= 770)
                directionX = false;
        }
        else {
            ball.x -= 5;
            if(ball.x <= 30)
                directionX = true;
        }
        if(directionY) {
            ball.y += 8;
            if(ball.y >= 570)
                directionY = false;
        }
        else {
            ball.y -= 8;
            if(ball.y <= 30)
                directionY = true;
        }
        //second variant
        requestAnimationFrame(animate);
    }

    animate();
}