var inputName = document.querySelector("#name")
var inputColor = document.querySelector("#color")
var inputFontSize = document.querySelector("#fontSize")
var inputName2 = document.querySelector("#name3")
var head = null;
var list = null;

class Header {
    constructor(name, color, fontSize) {
        this.name = [name];
        this.color = color;
        this.fontSize = fontSize;
    }
    displayDetails() {
        return this.name + " " + this.color + " " + this.fontSize;
    }
    render() {
        return `<div><h1 style=color:${this.color};font-size:${this.fontSize}> ${this.name} </h1></div>`
    }
    updateName() {
        this.name = inputName.value
        return this.name
    }
    updateColor() {
        this.color = inputColor.value
        return this.color
    }
    updateFontSize() {
        this.fontSize = inputFontSize.value
        return this.fontSize
    }
}

class listHeader extends Header {
    constructor(name, color, fontSize) {
        super(name, color, fontSize)
    }
    push() {
        this.name[this.name.length] = inputName2.value
        console.log(this.name)
        fillOptions()
        return this.name
    }
    deleteName(delVal) {
        var newName = list.name.filter((elem) => {
            if(elem != delVal){
                return elem;
            }
            console.log(elem)
        })
        this.name = newName
    }
    render() {
            return `<div><h1 style=color:${this.color};font-size:${this.fontSize}> ${this.name} </h1></div>`
    }
}

var body = document.querySelector("body");
var div = document.createElement("div");
function renderDisplay() {
    div.innerHTML = head.render()
    body.appendChild(div)
}

function changeName() {
    if (head == null) {
        head = new Header(inputName.value, "black", 20 + "px")
    }
    head.updateName()
}

function changeColor() {
    head.updateColor()
}

function changeFontSize() {
    head.updateFontSize()
}

function nameChange() {
    if (list == null) {
        list = new listHeader(inputName2.value, "black", 20 + "px")
    }
    list.push()
}

var div1 = document.createElement("div");
function display() {
    div1.innerHTML = list.render()
    body.appendChild(div1)
}

var select = document.querySelector("#select");
function fillOptions() {
    var option = document.createElement("option");
    for(var i = 0; i <=list.name.length - 1; i++) {
        option.textContent = list.name[i];
        option.setAttribute("value", list.name[i])
        select.appendChild(option)
    }
}

function delName() {
    var del = document.querySelector("#deleteName").value
    list.deleteName(del)
}

