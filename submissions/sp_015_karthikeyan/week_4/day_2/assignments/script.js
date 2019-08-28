var finalNumber = 0;
var gameScore = 0;
var count = 1;



function input(number) {
    var previousNumber = "";
    previousNumber = document.getElementById("scoreboard").innerHTML;
    finalNumber = Number(previousNumber + number);
    document.getElementById("scoreboard").innerHTML = finalNumber;  
}


function gameScores(playerName) {
    var currentScore = document.getElementById("scoreboard").innerHTML;
    var gameScoresDiv = document.getElementById("game-scores");
    gameScore = Number(gameScore) + Number(currentScore);

    var divContent = playerName + " - " + gameScore;
    var div = document.createElement("div");
    div.innerHTML = divContent;
    gameScoresDiv.appendChild(div);
}

function match() {
    var minNumber = Number(document.getElementById("minValue").innerHTML);
    var maxNumber = Number(document.getElementById("maxValue").innerHTML);
    var playerName = document.getElementById("nameInput").value;
    if (finalNumber < minNumber) {
        document.getElementById("minValue").innerHTML = finalNumber;
        document.getElementById("player-name-1").innerHTML = playerName;
    }
    else if (finalNumber > maxNumber) {
        document.getElementById("maxValue").innerHTML = finalNumber;
        document.getElementById("player-name-2").innerHTML = playerName;
    }
    gameScores(playerName);

    document.getElementById("scoreboard").innerHTML = "";
    document.getElementById("nameInput").value = "";
    
}

function remove(type) {
    
    if(type == "Last") {
        var divsArr = document.querySelectorAll("#game-scores div");
        var gameScoresDiv = document.getElementById("game-scores");
        gameScoresDiv.removeChild(divsArr[divsArr.length - 1]);
    }
}
