let buttons = document.querySelectorAll("button");
let headings = document.querySelectorAll("h1");
let table = document.getElementById("table-records");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let tableCounter = 1;
let isPaused = false;
let x;


populateTable = () => {
    let length = localStorage.length;
    table.innerHTML = '';
    for(let i = 0; i < length; i++) {
        let tr = document.createElement("tr");
        let tdOne = document.createElement("td");
        tdOne.textContent = i+1;
        tr.appendChild(tdOne);
        let tdTwo = document.createElement("td");
        tdTwo.textContent = localStorage.getItem(i+1);
        tr.appendChild(tdTwo);
        table.appendChild(tr);
    }
}

populateTable();

buttons[0].addEventListener("click", function() {
    isPaused = !isPaused;
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
    localStorage.setItem(`${tableCounter}`, `${headings[0].innerHTML}:${headings[2].innerHTML}:${headings[4].innerHTML}:${headings[6].innerHTML}`);
    populateTable();
    tableCounter++;
})

buttons[2].addEventListener("click", function() {
    clearInterval(x);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsHandler();
    minutesHandler();
    secondsHandler();
    hoursHandler();
    headings[6].innerHTML = '00';
    buttons[0].textContent = "Start";
    isPaused = false;
    localStorage.clear();
    table.innerHTML = '';
    tableCounter = 1;
    return 1;
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