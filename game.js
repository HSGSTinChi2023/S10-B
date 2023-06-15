function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
  
  
function allowDrop(event) {
    event.preventDefault();
}
  
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}
  
var block = [], number, gameOver = false, cnt=0;

function start() {
    cnt++;
    if(gameOver) {
        alert ("You Winnn");
        return;
    }
    else if (cnt>1) alert("INCORRECT");

    for (let i=1; i<=4;i++) block[i] = [];

    block[1][1] = document.getElementById("b1");
    block[1][2] = document.getElementById("b2");
    block[1][3] = document.getElementById("b3");
    block[1][4] = document.getElementById("b4");
    block[2][1] = document.getElementById("b5");
    block[2][2] = document.getElementById("b6");
    block[2][3] = document.getElementById("b7");
    block[2][4] = document.getElementById("b8");
    block[3][1] = document.getElementById("b9");
    block[3][2] = document.getElementById("b10");
    block[3][3] = document.getElementById("b11");
    block[3][4] = document.getElementById("b12");
    block[4][1] = document.getElementById("b13");
    block[4][2] = document.getElementById("b14");
    block[4][3] = document.getElementById("b15");
    block[4][4] = document.getElementById("b16");
}

var hihi = [];

function check() {
    for (i=1;i<=4;i++) hihi[i] = [];
    hihi[1][1] = parseInt(document.getElementById("b1").innerText);
    hihi[1][2] = parseInt(document.getElementById("b2").innerText);
    hihi[1][3] = parseInt(document.getElementById("b3").innerText);
    hihi[1][4] = parseInt(document.getElementById("b4").innerText);
    hihi[2][1] = parseInt(document.getElementById("b5").innerText);
    hihi[2][2] = parseInt(document.getElementById("b6").innerText);
    hihi[2][3] = parseInt(document.getElementById("b7").innerText);
    hihi[2][4] = parseInt(document.getElementById("b8").innerText);
    hihi[3][1] = parseInt(document.getElementById("b9").innerText);
    hihi[3][2] = parseInt(document.getElementById("b10").innerText);
    hihi[3][3] = parseInt(document.getElementById("b11").innerText);
    hihi[3][4] = parseInt(document.getElementById("b12").innerText);
    hihi[4][1] = parseInt(document.getElementById("b13").innerText);
    hihi[4][2] = parseInt(document.getElementById("b14").innerText);
    hihi[4][3] = parseInt(document.getElementById("b15").innerText);
    hihi[4][4] = parseInt(document.getElementById("b16").innerText);

    for (let i=1; i<=4; i++) {
        var sumcol = 0, sumrow = 0;
        for (let j=1; j<=4; j++) {
            sumcol += hihi[i][j];
            sumrow += hihi[j][i];
        }
        if (sumcol != 38 || sumrow != 38) return;
    }

    if (hihi[1][1] + hihi[2][2] + hihi[3][3] + hihi[4][4] != 38 || hihi[4][1] + hihi[3][2] + hihi[2][3] + hihi[1][4] != 38) return;
    gameOver=true;
}
start();    
let submit = document.getElementById("submitbtn");
submit.addEventListener("click", start);
