class Header {
    constructor(Name, Color = 'black', Font = '20px') {
    this.Name = Name
    this.Color = Color
    this.Font = Font
    }
displayDetails() {
        console.log(`Name: ${this.Name}\n Color: ${this.Color}\n Font: ${this.Font}`);
    }
    
render() {
       return `<h1 style = "color: ${this.Color}; font-size: ${this.Font}">${this.Name}</h1>`;
    }

updateName(Name) {
    this.Name = Name;
}

updateColor(Color) {
    this.Color = Color;
}

updateFont(Font) {
    this.Font = Font;
}
}

class listHeader extends Header {
    constructor(Name) {
        super(Name);
        this.Name = [Name]
    }
enterName() {
    this.Name[this.Name.length] = Name;
    //console.log(Name);
}
displayDetails1() {
    for(let i = 0; i < this.Name.length; i++) {
        console.log(`Name: ${this.Name}\n Color: ${this.Color}\n Font: ${this.Font}`);
    }
}
}

let info;
let newInfo;
let newName = [];
let index = 0;
let buttons = document.querySelectorAll('button');
let inputs = document.querySelectorAll('input');
let selectors = document.querySelector('select');

buttons[0].addEventListener('click', function() {
    event.preventDefault();
    let name = inputs[0].value;
    info = new Header(name);
    info.displayDetails();
})

buttons[1].addEventListener('click', function () {
    event.preventDefault();
    let color = inputs[1].value;
    info.updateColor(color);
    //console.log(info);
    info.displayDetails();
})

buttons[2].addEventListener('click', function () {
    event.preventDefault();
    let font = inputs[2].value;
    info.updateFont(font);
    info.displayDetails();
})

buttons[3].addEventListener('click', function () {
    event.preventDefault();
    let heading = document.createElement('p');
    heading.innerHTML = info.render();
    let body = document.querySelector('body');
    body.appendChild(heading);
})

buttons[4].addEventListener('click', function () {
    event.preventDefault();
    newName = inputs[3].value.split(' ');
    newInfo = new listHeader(newName);
    newInfo.displayDetails1();
    //console.log(newName);
})

buttons[5].addEventListener('click', function () {
    event.preventDefault();
    newName.map((item, index) => {
    var list = document.createElement('option');
    list.setAttribute('id', index);
    //console.log(item);
    list.textContent = item;
    selectors.appendChild(list);
    index++;
});
})

buttons[6].addEventListener('click', function () {
    event.preventDefault();
    let newColor = inputs[4].value;
    newInfo.updateColor(newColor);
    newInfo.displayDetails1();
    //console.log(newColor);
})

buttons[7].addEventListener('click', function () {
    event.preventDefault();
    let newFont = inputs[5].value;
    newInfo.updateFont(newFont);
    newInfo.displayDetails1();
})

buttons[8].addEventListener('click', function () {
    event.preventDefault();
    let newHeading = document.createElement('p');
    newHeading.innerHTML = newInfo.render();
    let body = document.querySelector('body');
    body.appendChild(newHeading);
})

buttons[9].addEventListener('click', function () {
    event.preventDefault();
    var id1 = document.getElementById('namesList').value;
    newName = newName.filter(index => (index != id1) )
    console.log(newName);
    let newpara = document.querySelector('p');
    
    newpara.innerHTML = newInfo.render();
    console.log(newpara.length);
    let body = document.querySelector('body');
    body.removeChild(newpara);
})
    


