function init() {
    //constanst:
    let moveSpeed = 10;
    let score = -1;

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let catImg = document.getElementById('theCat');
    //let catImg = new Image();
    //catImg.src = 'src/cat.jpg';

    let mouseImg = document.getElementById('theMouse');
    //let mouseImg = new Image();
    //mouseImg.src = 'src/mouse.jpg';

    let cat = {x: 0, y: 0};
    let mouse = {x: 0, y: 0};

    window.addEventListener('keydown', keyboardHandler);

    function update() {
        
    }
    
    function reset() {
        score++;
        mouse.x = Math.round(Math.random() * 700);
        mouse.y = Math.round(Math.random() * 500);
    }

    function keyboardHandler(event) {
        console.log(event.code);
        switch (event.code) {
            case "ArrowLeft":
                cat.x -= moveSpeed;
                break;
            case "ArrowRight":
                cat.x += moveSpeed;
                break;
            case "ArrowUp":
                cat.y -= moveSpeed;
                break;
            case "ArrowDown":
                cat.y += moveSpeed;
                break;
        }
        update();
    }

    function draw()
    {
        ctx.clearRect(0, 0, 800, 600);

        ctx.drawImage(mouseImg, mouse.x, mouse.y);
        ctx.drawImage(catImg, cat.x, cat.y);

        ctx.fillText(`Mice caught: ${score}`, 10, 10);
    }

    function update() {
        //let catX = cat.x + cat.width / 2; cat.width - hardcord value
        let x= (cat.x + 82) - (mouse.x + 50);
        let y = (cat.y + 50) - (mouse.y + 57);
        //let catY = cat.y + cat.height / 2; cat.height - hardcord value

        let distance = Math.sqrt(x * x + y * y);
        if(distance < 90) {
            reset();
        }


        draw();
    }

    reset();
    draw();
}

init();