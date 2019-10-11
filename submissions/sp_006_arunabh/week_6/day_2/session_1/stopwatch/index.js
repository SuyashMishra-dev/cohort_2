let startButton = document.getElementById('start');
let splitButton = document.getElementById('split');
let reset = document.getElementById('reset');

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let millisecond = document.getElementById('millisecond');
let display = document.getElementById('display');
var startTimer;


startButton.addEventListener('click', () => {
    if(startButton.textContent === 'Start') {
        startTimer = setInterval(() => {
            if(millisecond.textContent == 99) {
                second.textContent = Number(second.textContent) + 1;
                millisecond.textContent = 0;
                if(second.textContent == 59) {
                    minute.textContent = Number(minute.textContent) + 1;
                    second.textContent = 0;
                    if(minute.textContent == 59) {
                        hour.textContent = Number(hour.textContent) + 1;
                        minute.textContent = 0;
                    }
                }
            }
            millisecond.textContent = Number(millisecond.textContent) + 1;
        },10)
    }
    else {
        clearInterval(startTimer);
    }
    startButton.textContent === 'Start' ? startButton.textContent = 'Pause' : startButton.textContent = 'Start';
})

splitButton.addEventListener('click', () => {
    var splitTime = document.createElement('h4');
    splitTime.textContent = `${hour.textContent}:${minute.textContent}:${second.textContent}:${millisecond.textContent}`;
    var info = document.createElement('span');
    info.textContent= " Split";
    splitTime.appendChild(info);
    display.appendChild(splitTime);
})

reset.addEventListener('click', () => {
    clearInterval(startTimer);
    hour.textContent = '00';
    minute.textContent = '00';
    second.textContent = '00';
    millisecond.textContent = '00';
    display.textContent = "";
})