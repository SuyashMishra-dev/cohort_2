var finalNumber = 0;
var gameScore = 0;
var count = 1;

function input(number) {
    var previousNumber = "";
    previousNumber = document.getElementById("scoreboard").innerHTML;
    finalNumber = Number(previousNumber + number);
    document.getElementById("scoreboard").innerHTML = finalNumber;  
}

function gameScores() {
    var currentScore = document.getElementById("scoreboard").innerHTML;
    var gameScoresDiv = document.getElementById("game-scores");
    var totalScoreDiv = document.getElementById("total-score");
    gameScore = Number(gameScore) + Number(currentScore);
    var divContent = "Game " + count + " - " + gameScore;
    var div = document.createElement("div");
    div.innerHTML = divContent;
    gameScoresDiv.appendChild(div);
    count++;
    totalScoreDiv.innerHTML = gameScore;
}

function match() {
    var minNumber = Number(document.getElementById("minValue").innerHTML);
    var maxNumber = Number(document.getElementById("maxValue").innerHTML);
    if (finalNumber < minNumber) {
        document.getElementById("minValue").innerHTML = finalNumber;
    }
    else if (finalNumber > maxNumber) {
        document.getElementById("maxValue").innerHTML = finalNumber;
    }
    gameScores();
    document.getElementById("scoreboard").innerHTML = "";
    
}

function remove(type) {
    if(type == "All") {
        var divsArr = document.querySelectorAll("#game-scores div");
        var gameScoresDiv = document.getElementById("game-scores");
        for(i = 0; i < divsArr.length; i++) {
            gameScoresDiv.removeChild(divsArr[i]);
        }
    }

    else if(type == "Odd") {
        var divsArr = document.querySelectorAll("#game-scores div");
        var gameScoresDiv = document.getElementById("game-scores");
        for(i = 1; i <= divsArr.length; i++) {
            if((i == 1) || (i%2) == 1) {
                gameScoresDiv.removeChild(divsArr[i-1]);
            }
        }
    }
    else if(type == "Even") {
        var divsArr = document.querySelectorAll("#game-scores div");
        var gameScoresDiv = document.getElementById("game-scores");
        for(i = 1; i <= divsArr.length; i++) {
            if((i%2) == 0) {
                gameScoresDiv.removeChild(divsArr[i-1]);
            }
        }
    }
    else if(type == "Last") {
        var divsArr = document.querySelectorAll("#game-scores div");
        var gameScoresDiv = document.getElementById("game-scores");
        gameScoresDiv.removeChild(divsArr[divsArr.length - 1]);
    }
}