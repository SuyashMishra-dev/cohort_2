
class Header{
    constructor(name,color,fontSize){
    this.name = [name];
    this.color = color;
    this.fontSize = fontSize;
    }
    displayDetails(){
        return this.name +" "+ this.color +" "+  this.fontSize;
    }
    render(){
        return `<div><h1 style=color:${this.color};font-size:${this.fontSize}> ${this.name} </h1></div>`
    }
    updateName(){
        this.name = inputName.value
        return this.name  
    }
    updateColor(){
        this.color = inputColor.value
        return this.color
    }
    updateFontSize(){
        this.fontSize = inputFontSize.value
        return this.fontSize
    }
    deleteName(){
        
    }
}

var head = null;
var inputName = document.querySelector("#name")
var inputColor = document.querySelector("#color")
var inputFontSize = document.querySelector("#fontSize")

function renderDisplay() {
    var body = document.querySelector("body");
    var div = document.createElement("div"); 
    div.innerHTML = head.render()
    body.appendChild(div)
}

function changeName() {
    if(head == null){
        head = new Header (inputName.value, "black", 20+"px")
        console.log(head)
    }
    head.updateName(inputName)
}
function changeColor() {
    head.updateColor(inputColor)
}
function changeFontSize() {
    head.updateFontSize(inputFontSize)
}

class listHeader extends Header{
    constructor(name,color,fontSize){
        super(color,fontSize);
        this.name = [name]
    }
}