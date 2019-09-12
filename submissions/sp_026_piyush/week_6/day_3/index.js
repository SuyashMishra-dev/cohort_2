

class Header {
    constructor (name) {
        this.name = name;
        this.color = 'black';
        this.fontSize = 20;
    }

    displayDetails() {
        console.log(`Name is ${this.name}, Color is ${this.color}, Font Size is ${this.fontSize}`);
    }

    updateName(newName) {
        this.name = newName;
        document.querySelector('#container').innerHTML = this.render();
    }
    
    updateColor(newColor) {
        this.color = newColor;
        document.querySelector('#container').innerHTML = this.render();
    }

    updateFontSize(newSize) {
        this.fontSize = newSize;
        document.querySelector('#container').innerHTML = this.render();
    }

    render() {
        
        return `<h1 style='color: ${this.color}; font-size: ${this.fontSize}px;'> ${this.name} </h1>`;

        // var elemBody = document.querySelector('body');
        // var div = document.createElement('div');
        // elemBody.appendChild(div);
        // var h1 = document.createElement('h1');
        // h1.innerHTML = `Name: ${this.name}`;
        // h1.style.color = this.color;
        // div.appendChild(h1);
        // return `<div><h1> ${this.name} </h1></div>`
        // console.log(`${this.name}`)
        // return '<div><h1' + this.name + '</h1></div>';
    }
}

var heading = new Header('Piyush');











// var newName = document.getElementById('name').value;
// var newColor = document.getElementById('color').value;
// var newSize = document.getElementById('fontSize').value;
// heading.displayDetails();
// console.log(heading)
// heading.render();
