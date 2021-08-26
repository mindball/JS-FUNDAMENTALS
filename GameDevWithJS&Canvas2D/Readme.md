# GameDevWithJS&Canvas2D
### Draw triangle
```javascript
ctx.beginPath();
ctx.moveTo(10,50);
ctx.lineTo(50,10);
ctx.lineTo(50,90);
ctx.fill(); - ако изпълним тази команда и фигурата не е затворена се затваря сама.
```

### Draw smiley face
```javascript
ctx.beginPath();
ctx.arc(75,75,50,0,Math.PI*2,true);
ctx.moveTo(110,75);
ctx.arc(75,75,35,0,Math.PI,false);
ctx.moveTo(65,65);
ctx.arc(60,65,5,0,Math.PI*2,true);
ctx.moveTo(95,65);
ctx.arc(90,65,5,0,Math.PI*2,true);
ctx.stroke();
```

### Image
```javascript
let img = new Image();
img.src = "src/cat.jpg";
ctx.drawImage(img, 0, 0);
```
