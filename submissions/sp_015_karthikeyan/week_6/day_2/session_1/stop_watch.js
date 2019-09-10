let buttons = document.querySelectorAll("button");
let headings = document.querySelectorAll("h1");
let table = document.getElementById("table-records");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let tableCounter = 0;
let isPaused = false;
var x;

buttons[0].addEventListener("click", function() {
    isPaused = !isPaused;
    console.log("hi");
    if(!isPaused) {
        buttons[0].textContent = "Start";
        clearInterval(x);
        return 1;
    }
    else if(isPaused) {
        buttons[0].textContent = "Pause";
        
    }
    x = setInterval(() => {
        milliseconds++;
        if(milliseconds.toString().length == 1) {
            headings[6].innerHTML = `0${milliseconds}`;
        }
        else headings[6].innerHTML = `${milliseconds}`;
        if(milliseconds == 99) {
            seconds++;
            secondsHandler();
            milliseconds = 0;
            if(seconds == 59) {
                minutes++;
                seconds = 0;
                milliseconds = 0;
                secondsHandler();
                minutesHandler();
                if(minutes == 59) {
                    hours++;
                    seconds = 0;
                    minutes = 0;
                    milliseconds = 0;
                    secondsHandler();
                    minutesHandler();
                    hoursHandler();
                }
            }
        }
    }, 10);
    
})

buttons[1].addEventListener("click", function() {
    var tr = document.createElement("tr");
    for(let i = 0; i < 7; i+=2) {
        var td = document.createElement("td");
        td.textContent = headings[i].innerHTML;
        tr.appendChild(td);
    }
    table.appendChild(tr);
})

buttons[2].addEventListener("click", function() {
    milliseconds, seconds, minutes, hours = 0;
    console.log(minutes);
})

function secondsHandler() {
    if(seconds.toString().length == 1) {
        headings[4].innerHTML = `0${seconds}`;
    }
    else headings[4].innerHTML = `${seconds}`;
}

function minutesHandler() {
    if(minutes.toString().length == 1) {
        headings[2].innerHTML = `0${minutes}`;
    }
    else headings[2].innerHTML = `${minutes}`;
}

function hoursHandler() {
    if(hours.toString().length == 1) {
        headings[0].innerHTML = `0${hours}`;
    }
    else headings[0].innerHTML = `${hours}`;
}