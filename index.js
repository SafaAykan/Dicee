function refreshPage() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomImageSource = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageSource2);

var winner;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    winner = "Player 1";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    winner = "Player 2";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
    winner = "Draw";
}

addResultToTable(randomNumber1, randomNumber2, winner);
}


function addResultToTable(randomNumber1, randomNumber2, winner) {
    const resultsTable = document.getElementById("results-table").getElementsByTagName('tbody')[0];
    const newRow = resultsTable.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = randomNumber1;
    cell2.innerHTML = randomNumber2;
    cell3.innerHTML = winner;
}

function hardRefreshPage() {
    location.reload();
}