class Header {
    constructor(name) {
        this.name = name;
        this.color = 'black';
        this.font_size = 20;
    }
    displayDetails() {
        console.log(` name is ${this.name} color is ${this.color} font-size is ${this.font_size}`)
    }
    render() {
        return `<div><h1 style="color:${this.color};font-size:${this.font_size}">${this.name}</h1></div>`
    }
    updateName(name) {
        this.name = name;

    }

    updateColor(color) {
        this.color = color;
        console.log(this.color)
    }
    updateFontSize(fontsize) {
        this.font_size = fontsize;
    }
}
var obj1 = new Header()

var arrnew = []
class listHeader extends Header {
    constructor(name) {
        super(name)
        this.name = [name];
    }
    displayDetails() {

        console.log(`Name : ${this.name}`)

    }
    pushm(name) {

        this.name[this.name.length] = name

    }

    deletename() {
        console.log('im here')
    }


    update_name(oldname, newname) {

        this.name = this.name.map(a => {
            if (a == oldname) {
                return newname;
            }
            else {
                return a;
            }
        })

    }
    render() {
        return this.name;
        //   return `<div><h1 style="color:${this.color};font-size:${this.font_size}">${this.name}</h1></div>`
    }
    delete2(input) {
        this.name = this.name.map(a => {
            if (a != input) {
                return a;
            }
        })
    }

}


var obj2 = null;
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

function name2() {
    var input2 = document.getElementById("nameinput").value;
    if (obj2 == null) {

        obj2 = new listHeader(input2);
    }
    else {
        obj2.pushm(input2);
    }
    selectfunction();
    console.log(obj2.name)
    // console.log(arrnew)
    obj2.displayDetails();
}

selectfunction = () => {
    body_option.innerHTML = ''
    obj2.name.forEach(element => {
        var newelem = document.createElement('option')
        newelem.setAttribute('value', element);
        newelem.textContent = element;
        body_option.appendChild(newelem);

    });
    // for (var a = 0; a < obj2.name.length; a++) {
    //     var newelem = document.createElement('option')
    //     newelem.setAttribute('value', obj2.name[a])
    //     newelem.textContent = obj2.name[a];
    //     body_option.appendChild(newelem)
    //     // arrnew.push(obj2.name[a])
    // }
}

function color2() {
    var input3 = document.getElementById("color2").value;
    input3.innerHTML = ''
    obj2.updateColor(input3);

}
function fontsize2() {
    var input4 = document.getElementById("font2").value;
    obj2.updateFontSize(input4);


}
function render2() {
    console.log('hii')
    var boddy2 = document.getElementById("display2")

    var array_print = obj2.render()
    boddy2.innerHTML = ''
    array_print.forEach(a => {
        var elem = document.createElement('h2')
        elem.textContent = a
        boddy2.appendChild(elem)
    })
}

const update = () => {

    var newname = document.getElementById("newname").value
    var oldname = document.getElementById('name2').value
    obj2.update_name(oldname, newname)
    selectfunction();

}
const delete2 = () => {
    var select = document.getElementById('name2').value
    obj2.delete2(select);
    selectfunction();
}

console.log(update)

