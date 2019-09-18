class Header {
    constructor(name, color, font_size) {
        this.name = [name];
        this.color = color;
        this.font_size = font_size;
    }
    displayDetails(){
        console.log(this.name);
        console.log(this.color);
        console.log(this.font_size);
    }
    render() {
        //this.updateName();
        return `<h1> ${this.name} </h1>`
    }

    push(name) {
        this.name[this.name.length] = name;
    }
    updateName() {
         this.name = [name];
         console.log(this.name);
    }
    updateColor() {
        this.color = color;
        console.log(this.color);
    }
    updateFontSize() {
        this.font_size = font_size;
        console.log(this.font_size);
    }
}
var naga = new Header('Naga');

function render() {
    var cont = document.getElementById('root');
    cont.innerHTML = naga.render();
}

// function render() {
//     var cont = document.getElementById('root');
//     cont.innerHTML = masai_stack.render();
// }

// class listHeader extends Header{

//     printName() {
//         console.log(this.name);
//     }
//     printColor() {
//         console.log(this.color);
//     }
//     printFontSize() {
//         console.log(this.font_size);
//     }
    // render() {
    //     return `<h1> ${this.name} </h1>`
    // }
    // push(name){
    //     this.name[this.name.length] = name;
    //     this.displayName();
    // }
    // displayName() {
    //     console.log('display name', this.name)
    // }
    // push(color) {
    //     this.color[this.color.length] = color;
    //     this.displaycolor();
    // }
    // displaycolor() {
    //     console.log('display color', this.color);
    // }
    // push(font_size){
    //     this.font_size[this.font_size.length] = font_size;
    //     this.displayFontSize();
    // }
    // displayFontSize() {
    //     console.log('display font-size', this.font_size);
    // }
//}

