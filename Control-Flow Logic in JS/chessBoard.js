function chessboard(n) {
    let html = '<div class="chessboard">\n';
    let color = 'black';
    for (let row = 1; row <= n; row++){
        html += "  <div>\n";
        for (let col = 0; col <= n; col++) {
            html += `    <span class="${color}"></span>\n`;
            if(color == "white")
                color = "black";
            else
                color = "white";
        }
        html += "  </div>\n";        
    }

    html += "</div>\n";
    if(n % 2 == 0)
            if(color == "white")
                color = "black";
            else
                color = "white";
    return html;
}

