let turn = 'X'
let chance = 1;
let Endgame = 0;
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let checkreset = 0;
var audio = document.getElementById('audio');

function reset() {
    location.reload();
}
function getturn() {
    if (chance % 2 == 0) {
        turn = 'O'
        document.getElementById("chanceIndicator").innerText = "Player 1 (X) chance ";
    }
    else {
        turn = 'X'
        document.getElementById("chanceIndicator").innerText = "Player 2 (O) chance ";
    }
    chance++;
}
function stopbutton() {
    for (i = 0; i < array.length; i++) {
        array[i] = 1;
    }
    checkreset = 1;

}


function checkwin() {
    let btn1 = document.getElementById("btn1").value;
    let btn2 = document.getElementById("btn2").value;
    let btn3 = document.getElementById("btn3").value;
    let btn4 = document.getElementById("btn4").value;
    let btn5 = document.getElementById("btn5").value;
    let btn6 = document.getElementById("btn6").value;
    let btn7 = document.getElementById("btn7").value;
    let btn8 = document.getElementById("btn8").value;
    let btn9 = document.getElementById("btn9").value;

    if (btn1 == btn2 && btn1 == btn3 && btn1 == 'X') {

        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn1").style.background = "white";
        document.getElementById("btn2").style.background = "white";
        document.getElementById("btn3").style.background = "white";


        stopbutton();

    }
    else if (btn1 == btn2 && btn1 == btn3 && btn1 == 'O') {

        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn1").style.background = "white";
        document.getElementById("btn2").style.background = "white";
        document.getElementById("btn3").style.background = "white";
        stopbutton();
    }
    else if (btn4 == btn5 && btn4 == btn6 && btn4 == 'X') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn4").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn6").style.background = "white";
        stopbutton();
    }
    else if (btn4 == btn5 && btn4 == btn6 && btn4 == 'O') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn4").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn6").style.background = "white";
        stopbutton();
    }
    else if (btn7 == btn8 && btn7 == btn9 && btn7 == 'X') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn7").style.background = "white";
        document.getElementById("btn8").style.background = "white";
        document.getElementById("btn9").style.background = "white";
        stopbutton();
    }
    else if (btn7 == btn8 && btn7 == btn9 && btn7 == 'O') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn7").style.background = "white";
        document.getElementById("btn8").style.background = "white";
        document.getElementById("btn9").style.background = "white";
        stopbutton();
    }
    //col
    else if (btn1 == btn4 && btn1 == btn7 && btn1 == 'X') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn1").style.background = "white";
        document.getElementById("btn4").style.background = "white";
        document.getElementById("btn7").style.background = "white";
        stopbutton();
    }
    else if (btn1 == btn4 && btn1 == btn7 && btn1 == 'O') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn1").style.background = "white";
        document.getElementById("btn4").style.background = "white";
        document.getElementById("btn7").style.background = "white";
        stopbutton();
    }
    else if (btn2 == btn5 && btn2 == btn8 && btn2 == 'X') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn2").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn8").style.background = "white";
        stopbutton();
    }
    else if (btn2 == btn5 && btn2 == btn8 && btn2 == 'O') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn2").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn8").style.background = "white";
        stopbutton();
    }
    else if (btn3 == btn6 && btn3 == btn9 && btn3 == 'X') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn3").style.background = "white";
        document.getElementById("btn6").style.background = "white";
        document.getElementById("btn9").style.background = "white";
        stopbutton();
    }
    else if (btn3 == btn6 && btn3 == btn9 && btn3 == 'O') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn3").style.background = "white";
        document.getElementById("btn6").style.background = "white";
        document.getElementById("btn9").style.background = "white";
        stopbutton();
    }
    //diagonal
    else if (btn1 == btn5 && btn1 == btn9 && btn1 == 'X') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn1").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn9").style.background = "white";
        stopbutton();
    }
    else if (btn1 == btn5 && btn1 == btn9 && btn1 == 'O') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn1").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn9").style.background = "white";
        stopbutton();
    }
    else if (btn3 == btn5 && btn3 == btn7 && btn3 == 'X') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 1 Wins";
        document.getElementById("btn3").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn7").style.background = "white";
        stopbutton();
    }
    else if (btn3 == btn5 && btn3 == btn7 && btn3 == 'O') {
        document.getElementById("chanceIndicator").style.color = "red";
        document.getElementById("chanceIndicator").style.font = "bold";
        document.getElementById("chanceIndicator").innerText = "Player 2 Wins";
        document.getElementById("btn3").style.background = "white";
        document.getElementById("btn5").style.background = "white";
        document.getElementById("btn7").style.background = "white";
        stopbutton();
    }


}
let clickCount = 0;
function hfun(elementID) {


    if (checkreset == 1) {

        alert("Reset game to Playagain");
    }

    if (elementID === 'btn1' && array[0] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn1').value = turn;
        array[0] = 1;

        // document.getElementById('btn1').disabled=true;
    }
    else if (elementID === 'btn2' && array[1] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn2').value = turn;
        array[1] = 1;

        // document.getElementById('btn2').disabled=true;
    }
    else if (elementID === 'btn3' && array[2] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn3').value = turn;
        array[2] = 1;
        // document.getElementById('btn3').disabled=true;
    }
    else if (elementID === 'btn4' && array[3] == 0) {
        clickCount++;
        getturn();

        document.getElementById('btn4').value = turn;
        array[3] = 1;
        // document.getElementById('btn4').disabled=true;
    }
    else if (elementID === 'btn5' && array[4] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn5').value = turn;
        array[4] = 1;
        // document.getElementById('btn5').disabled=true;
    }
    else if (elementID === 'btn6' && array[5] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn6').value = turn;
        array[5] = 1;
        // document.getElementById('btn6').disabled=true;
    }
    else if (elementID === 'btn7' && array[6] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn7').value = turn;
        array[6] = 1;
        // document.getElementById('btn7').disabled=true;
    }
    else if (elementID === 'btn8' && array[7] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn8').value = turn;
        array[7] = 1;
        // document.getElementById('btn8').disabled=true;
    }
    else if (elementID === 'btn9' && array[8] == 0) {
        clickCount++;
        getturn();
        document.getElementById('btn9').value = turn;
        array[8] = 1;
        // document.getElementById('btn9').disabled=true;
    }
    else if (clickCount >=9) {
        alert("It's a Tie Please Reset ");
    }
    checkwin();


}