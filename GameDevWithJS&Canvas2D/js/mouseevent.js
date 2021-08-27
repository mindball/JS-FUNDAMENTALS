function draw() {
    ctx.fillStyle = 'red';
    let ball = {x: 0, y: 0};
    let dir = true;
    let leave = false;

    window.addEventListener('click', function (event) {
        ball.x = 0;
        ball.y = event.clientY;
        if(!leave) {
            live = true;
            requestAnimationFrame(animate);
        }
    })

    function animate() {
        ctx.clearRect(0, 0, 800, 600);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 40, 0, Math.PI * 2);
        ctx.fill();

        if(dir) {
            ball.x += 5;
            if(ball.x >= 770) {
                dir = false;
            }
        }
        else {
            ball.x -= 5;
            if(ball.x <= 30) {
                dir = true;
            }
        }
        requestAnimationFrame(animate);
    }
}