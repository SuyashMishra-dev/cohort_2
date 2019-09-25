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

    pushNames(newName) {
        this.name[this.name.length] = newName;
    }
    displayDetails() {
        for(let i = 0; i < this.name.length; i++) {
            console.log(`Name: ${this.name[i]} \nColor: ${this.color} \nFont-Size: ${this.fontSize}`)
        }
    }

    updateNames(element) {
        let temp = this.name.map((ele) => {
            if(ele == selector.value) {
                return element;
            }
            else return ele;
        })
        this.name = temp;
    }

    deleteName(element) {
        let temp = newListHeader.name.filter((ele) => {
            if(ele != element) {
                return ele;
            } 
        })
        this.name = temp;
    }
    renders() {
        let output = "";
        for(let i = 0; i < newListHeader.name.length; i++) {
            output += "<h1 style='color:" + this.color + "'>" + this.name[i] + "</h1>";
        }
        console.log("hi" + output);
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
       newHeader.pushNames(inputs[0].value);
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
    mainDiv.innerHTML = newListHeader.renders();
})

buttons[5].addEventListener("click", function() {
    if(!isOtherNamePressed) {
        newListHeader = new ListHeader(inputs[3].value);
        isOtherNamePressed = true;
        newListHeader.displayDetails();
        populateSelector(newListHeader);
    }
    else if(isOtherNamePressed) {
        newListHeader.pushNames(inputs[3].value);
        newListHeader.displayDetails();
        populateSelector(newListHeader);
    }
})

buttons[6].addEventListener("click", function() {
    newListHeader.updateNames(inputs[3].value);
    populateSelector(newListHeader);
})

buttons[7].addEventListener("click", function() {
    newListHeader.updateColor(inputs[4].value);
})

buttons[8].addEventListener("click", function() {
    newListHeader.updateFontSize(inputs[5].value);
})

buttons[9].addEventListener("click", function() {
    newListHeader.deleteName(inputs[3].value);
    populateSelector(newListHeader);
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