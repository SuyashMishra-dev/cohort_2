//Part 1st

let info = null;
let display = document.getElementById('display');

class Header {
    constructor(name, color="black", fsize="20") {
        this.name = name;
        this.color = color;
        this.fsize = fsize;
    }

    displayDetails() {
        console.log(`
        Name : ${this.name}
        Color : ${this.color}
        Font-Size : ${this.fsize}`
        );
    }

    render() {
        return `<div>
                    <h1 style = 'color : ${this.color}; font-size : ${this.fsize}px'> ${this.name} </h1>
                </div>`;
    }

    updateName(name) {
        this.name = name;
    }

    updateColor(color) {
        this.color = color;
    }

    updateFontSize(fsize) {
        this.fsize = fsize;
    }
}    

changeName = (event) => {
    event.preventDefault();
    var name = document.getElementById('name').value;
    if(name === "") {
        alert("Empty Name Input!")
    }
    else{
        if(info == null) {
            info = new Header(name);
        }
        else {
            info.updateName(name);
        }
        document.getElementById('name').value = "";
        console.log(info);
    }
}

changeColor = (event) => {
    event.preventDefault();
    var color = document.getElementById('color').value;
    if(color === "") {
        alert("Empty Color Input!")
    }
    else {
        info.updateColor(color);
    }
    document.getElementById('color').value = "";
    console.log(info);
}

changeFont = (event) => {
    event.preventDefault();
    var fsize = document.getElementById('fsize').value;
    if(fsize === "") {
        alert("Empty Font-Size Input")
    }
    else {
        info.updateFontSize(fsize);
    }
    document.getElementById('fsize').value = "";
    console.log(info);
}

show = (event) => {
    event.preventDefault();
    display.innerHTML = info.render();
} 


//Part 2nd
let selectName = document.getElementById('modifyName');

class ListHeader extends Header {
    render() {
        display.innerHTML = "";
       info.name.forEach(el => {
           var div = `
            <div>
            <h1 style = 'color : ${info.color}; font-size : ${info.fsize}px'> 
            ${el} 
            </h1>
            </div>`;
            display.innerHTML = display.innerHTML + div;
        })
    }
}
formName = (event) => {
    event.preventDefault();
    var listNames = document.getElementById('newName').value;
    listNames = listNames.split(',');
    listNames.forEach((ele) => {
        var option = document.createElement('option');
        option.textContent = ele;
        selectName.appendChild(option);
    })
    
    if(info === null) {
        info = new ListHeader(listNames);
    }
    else {
        info.updateName(listNames);
    }

    // info.displayDetails();
    console.log(info);
    // info.render();
}

formColor = (event) => {
    event.preventDefault();
    var color = document.getElementById('newColor').value;
    // console.log(color);
    info.updateColor(color);
}

formFont = (event) => {
    event.preventDefault();
    var fsize = document.getElementById('newFsize');
    info.updateFontSize(fsize);
}

deleteFormName = (event) => {
    event.preventDefault();

    var name = document.getElementById('modifyName').value;
    info.name = info.name.filter(el => el !== name);
    console.log(info);
}

showForm = (event) => {
    event.preventDefault();
    info.render();
}