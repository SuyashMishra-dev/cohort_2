let clockDisplay = document.getElementById('clockDisplay');
let count = 0;
clockDisplay.textContent = "00:00:00";
let splitArr = [];
let start = true;
let ls = window.localStorage;
let x;
// console.log(ls.getItem('splitArr'))
window.onload = ()=>{
    
    if (ls.getItem('splitArr') != null) {
        splitArr = JSON.parse(ls.getItem('splitArr'));    
        displaySplit();
    }
    if (ls.getItem('count') != null) {
        count = Number(ls.getItem('count'));  
        clockDisplay.textContent = displayTime(count);  
    }
    
    
}
const toggleTimer = () => {
    if (start) {
        x = setInterval(() => {
            count++;
            clockDisplay.textContent = displayTime(count);
        }, 1000);
    } else {
        clearInterval(x);
    }
    
    toggleStart();
    ls.setItem('count',count);
}


const displayTime = (c) => {
    let time = '';
    // let mili = (c*1000)%1000;
    let sec = (c)%60;
    let min = null;
    if (Math.floor(c/60)>=60) {
        min = c%3600;
    } else {
        min = Math.floor(c/60);
    }    
    let hr = Math.floor(c/3600);
    return `${hr}:${min}:${sec}`;        
}


const splitTime = () => {
    // let time = displayTime(count).split(':').map(el=>Number(el));
    let diffTime = '';
    if (splitArr.length == 0) {
        diffTime = displayTime(count);
    } else {
        var oldTimeTotal = 0;
        splitArr.forEach((t,i)=>{            
            let y = t.split(':').map(el=>Number(el));
            let oldTimeSecs = y[0]*3600+y[1]*60+y[2];
            oldTimeTotal += oldTimeSecs;                               
        });
        
        diffTime = displayTime(count-oldTimeTotal);
    }
    splitArr.push(diffTime);
    displaySplit();
    ls.setItem('splitArr',JSON.stringify(splitArr));
    return 1;
}

const displaySplit = () => {
    let splitContainer = document.getElementById('splitContainer');
    splitContainer.innerHTML = '';
    splitArr.forEach((el,i)=>{
        let ptag = document.createElement('p');
        ptag.textContent = `#${i+1}  ${el}`;
        splitContainer.appendChild(ptag); 
    });
    return 1;
}

const reset = () => {
    
    count = 0;
    clearInterval(x);
    clockDisplay.textContent = "00:00:00";
    splitArr = [];
    start=true;
    let startBtn = document.getElementById('startBtn');
    startBtn.textContent='Start';
    displaySplit();
    ls.clear();
}


const toggleStart = () => {
    start = !start;
    let startBtn = document.getElementById('startBtn');
    start?startBtn.textContent='Start':startBtn.textContent='Pause';
}