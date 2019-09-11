class Header {
    constructor(name, color = "black", fontSize = "20px") {
        this.name = name
        this.color = color
        this.fontSize = fontSize
    }

    displayDetails() {
        return console.log(`Name: ${this.name} \nColor: ${this.color} \nFont-Size: ${this.fontSize}`);
    }

    render() {
        return `<h1 style="color: ${this.color}">${this.name}</h1>`;
    }

    updateName(newName) {
        this.name = newName;
    }
    updateColor(newColor) {
        this.color = newColor;
    }
    updateFontSize(newFontSize) {
        this.fontSize = newFontSize;
    }
}

class ListHeader extends Header {
    constructor(name) {
        super(name);
        this.name = [name];
    }

    updateNames(newName) {
        this.name[this.name.length] = newName;
    }
    displayDetails() {
        for(let i = 0; i < this.name.length; i++) {
            console.log(`Name: ${this.name[i]} \nColor: ${this.color} \nFont-Size: ${this.fontSize}`)
        }
    }
    renders() {
        let output = '';
        for(let i = 0; i < this.name.length; i++) {
            output += `<h1 style="color: ${this.color}">${this.name[i]}</h1>`
        }
        return output;
    }
}

let buttons = document.querySelectorAll("button");
let inputs = document.querySelectorAll("input");
let headersArr = [];
let isNamePressed = false;
let isOtherNamePressed = false;
let newHeader = null;
let newListHeader = null;
let mainDiv = document.getElementById("main");
let selector = document.getElementById("selector");

buttons[0].addEventListener("click", function() {
    mainDiv.innerHTML = newHeader.render();
})

buttons[1].addEventListener("click", function() {
   if(!isNamePressed) {
       newHeader = new Header(inputs[0].value);
       isNamePressed = true;
       newHeader.displayDetails();
   }
   else if(isNamePressed) {
       newHeader.updateNames(inputs[0].value);
   }
})

buttons[2].addEventListener("click", function() {
    newHeader.updateColor(inputs[1].value);
})

buttons[3].addEventListener("click", function() {
    newHeader.updateFontSize(inputs[2].value);
})

//Second Form

buttons[4].addEventListener("click", function() {
    mainDiv.innerHTML = newListHeader.render();
})

buttons[5].addEventListener("click", function() {
    if(!isOtherNamePressed) {
        newListHeader = new ListHeader(inputs[3].value);
        isOtherNamePressed = true;
        newListHeader.displayDetails();
        populateSelector(newListHeader);
    }
    else if(isOtherNamePressed) {
        newListHeader.updateNames(inputs[3].value);
        newListHeader.displayDetails();
        populateSelector(newListHeader);
    }
})

buttons[6].addEventListener("click", function() {
    newListHeader.updateColor(inputs[4].value);
})

buttons[7].addEventListener("click", function() {
    newListHeader.updateFontSize(inputs[5].value);
})

buttons[8].addEventListener("click", function() {
    
})

function populateSelector(ele) {
    selector.innerHTML = "";
    for(let i = 0; i < ele.name.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", ele.name[i]);
        option.textContent = ele.name[i];
        selector.appendChild(option);
    }
}