var result;

function press(number) {
var last_number = "";
last_number = document.getElementById("scoreboard").innerHTML;
result = Number(last_number + number);
document.getElementById("scoreboard").innerHTML = result; 
console.log(result)
}

function main() {
var min_score = 100
min_score = Number(document.getElementById("min").innerHTML);
var max_score = 100
max_score = Number(document.getElementById("max").innerHTML);
if (max_score <= result ) {
document.getElementById("max").innerHTML = result;	
}
else{
	document.getElementById("min").innerHTML = result;
}

document.getElementById("scoreboard").innerHTML = "";
}

function game() {
	var one = document.getElementById("scoreboard").innerHTML = document.getElementById("game_result").value;

}