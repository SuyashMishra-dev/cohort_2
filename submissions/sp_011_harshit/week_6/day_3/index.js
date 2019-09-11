class Header {
    constructor(name, color, fontsize) {
        this.name = name;
        this.color = color;
        this.font_size = fontsize;
    }
    displayDetails() {
        console.log(` name is ${this.name} color is ${this.color} font-size is ${this.font_size}`)
    }
    render() {
        return `<div><h1 style="color:${this.color};font-size:${this.font_size}">${this.name}</h1></div>`
    }
    updateName(name, color = 'black', font_size = 50) {
        this.name = name;
        this.color = color;
        this.font_size = font_size;
    }

    updateColor(color) {
        this.color = color;
        console.log(this.color)
    }
    updateFontSize(fontsize) {
        this.font_size = fontsize;
    }
}

class listHeader extends Header {

    constructor(name, color, font_size) {
        super(color, font_size)
        this.name = [name];
    }
    displayDetails() {

        console.log(`name is ${this.name} color is ${this.color} font is ${this.font_size}`)
    }
    updateName(name, color = 'red', font_size = 20) {
        // var body1=document.getElementById("name2")
        // var elem=document.createElement('p')
        // elem.innerHTML
        this.name.push(name);
        this.color = color;
        this.font_size = font_size;

    }

    updateFontSize(fontsize) {
        this.font_size = fontsize;
        console.log('im in class listheader')
    }
    deletename() {
        console.log('im here')
    }
    render() {
        return `<div><h1 style="color:${this.color};font-size:${this.font_size}">${this.name}</h1></div>`
    }



}
//Taking inputs from the  user for name , color , font;




var obj1 = new Header()
var body_option = document.getElementById("name2")
function name1() {

    var name_input = document.getElementById("name").value;
    obj1.updateName(name_input);

    obj1.displayDetails();
}
function color1() {
    var color_input = document.getElementById("color").value;
    obj1.updateColor(color_input);


}
function fontsize1() {
    var font_input = document.getElementById("fontsize").value;
    obj1.updateFontSize(font_input)

}
function render1() {
    var body = document.getElementById("display")
    body.innerHTML = obj1.render();

}


//to check inheritance
var obj2 = new listHeader()
function name2() {

    var input2 = document.getElementById("nameinput").value;
    obj2.updateName(input2);
    for (var a = 0; a < obj2.name.length; a++) {
        var newelem = document.createElement('option')
        newelem.textContent = obj2.name;
        body_option.appendChild(newelem)
        obj2.displayDetails();
    }
    document.getElementById("nameinput").value = ''
}

function color2() {
    var input3 = document.getElementById("color2").value;
    obj2.updateColor(input3);

}
function fontsize2() {
    var input4 = document.getElementById("font2").value;
    obj2.updateFontSize(input4);


}
function render2() {
    console.log('hii')
    var boddy2 = document.getElementById("display2")
    boddy2.innerHTML = obj2.render()
}

