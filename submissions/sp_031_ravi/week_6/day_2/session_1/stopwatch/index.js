var seconds = 0;
var minutes = 0;
var hours = 0;
var ms = 0;

var changeSeconds = 0;
var changeMinutes = 0;
var changeHours = 0;

var interval = null;//interval holder

var status = "stopped"; //to keep track of status

function stopWatch(){ //increment function
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        changeSeconds = "0" + seconds.toString();
    }
    else{
        changeSeconds = seconds;
    }

    if(minutes < 10){
        changeMinutes = "0" + minutes.toString();
    }
    else{
        changeMinutes = minutes;
    }

    if(hours < 10){
        changeHours = "0" + hours.toString();
    }
    else{
        changeHours = hours;
    }

    document.getElementById("display").innerHTML = changeHours + ":" + changeMinutes + ":" + changeSeconds;

}

function startStop(){  //start function
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }

}

reset = () => { //reset function
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}

//split function
split = () => {
//     var txt3 = document.createElement("p");  // Create with DOM
//   txt3.innerHTML = changeHours + ":" + changeMinutes + ":" + changeSeconds;
//   $("record").append(txt3);
    document.getElementById("record").innerHTML = changeHours + ":" + changeMinutes + ":" + changeSeconds;
}