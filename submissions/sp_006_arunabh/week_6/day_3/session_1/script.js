class Header {
    constructor(name) {
        this.name = name;
        this.color = "black";
        this.fsize = 20;
    }

    displayDetails() {
        console.log(
            `Name : ${this.name}
            Color : ${this.color}
            Font-Size : ${this.fsize}`
        )
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

var header1 = new Header("Masai");
var doc = document.getElementById('display');

function changeName() {
    var name = document.getElementById('name').value;
    header1.updateName(name);
}

function changeColor() {
    var color = document.getElementById('color').value;
    header1.updateColor(color);
}

function changeFont() {
    var fsize = document.getElementById('fsize').value;
    header1.updateFontSize(fsize);
}

function show() {
    header1.displayDetails();
    doc.innerHTML = header1.render();
}



class listHeader extends Header{
   render() {
      for(var i = 0; i < nameArr.length; i++) {
        doc.innerHTML = doc.innerHTML + `<div>
            <h1 style = 'color : ${this.color}; font-size : ${this.fsize}px'> ${nameArr[i]} </h1>
            </div>`;
      }
   }

    formColor() {
        var color = document.getElementById('newColor').value;
        super.changeColor(color);
    }

    formFont() {
        var fsize = document.getElementById('newFsize').value;
        super.changeFont(fize);
    }
}







// var ls = new listHeader("AA,BB,CC,DD,EE");
// var nameArr = ls.name.split(',');
// var opt = document.getElementById('modifyName');
// for(var i =0; i<nameArr.length; i++){
//     opt.innerHTML = opt.innerHTML + "<option>" + nameArr[i] + "</option>";
// }
// ls.render();