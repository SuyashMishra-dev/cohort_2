class Header {
    constructor(name,color,fontsize) {
        this.name = name
        this.color = color
        this.fontsize = fontsize
    }

    render(){
        console.log("hi")
        this.displayDetails()
        return `<h1 style=color:${this.color};font-size:${this.fontsize}> ${this.name}</h1>`
    }

    updateName(int) {
        this.name = int;
    }

    updateColor(col) {
        this.color = col;
    }

    updateFontsize(font) {
        this.fontsize = font;
    }

    displayDetails() {
        console.log(this.name,this.color,this.fontsize)
    }

}

var name_stack = new Header('Tejas','black','20px')

function render() {
    cont = document.getElementById("root");
    cont.innerHTML = name_stack.render()

}

function nam() {
   int = document.getElementById("input1").value;
   console.log(int)
   name_stack.updateName(int)
}

function col() {
    col = document.getElementById("input2").value;
    console.log(col)
    name_stack.updateColor(col)
}

function font() {
    font = document.getElementById("input3").value;
    console.log(font)
    name_stack.updateFontsize(font)
}










