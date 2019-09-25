class Header {
    constructor (name, color, font) {
        this.name = name;
        this.color = color;
        this.font = font;
        
    }
    displayDetails () {
        console.log(this.name, this.color, this.font)
    }
    render(){
            
            this.displayName()
            return `<h1> ${this.name} </h1>`
}
displayName(){
    console.log(this.name)
}
}

class listHeader extends Header {
    constructor (){
        super(name)
        
        this.name = [name];

    }
    // render2 () {
    //     /*this.displayName()*/
    //         return `<div> <h1> ${this.name} <h1> </div>`
    // }
    push (name) {
        this.name[this.name.length] = name;
        console.log(this.name);
        
    }
    render(){
        console.log('rendering')
        // this.displayName()
        return `<h1> ${this.name} </h1>`
    
      }
    
}

 var changes = () => {
    var nameInput = document.getElementById('nameInput').value;
    var colorInput = document.getElementById('colorInput').value;
    var fontInput = document.getElementById('fontInput').value;
    var obj = new Header(nameInput, colorInput, fontInput)
    console.log(obj)
    obj.displayDetails();
    cont = document.getElementById('root')
    cont.style.color = colorInput;
    cont.style.fontSize = fontInput + "px";
    cont.innerHTML = obj.render()

}
var obj2 = new listHeader();
var getDetail = () => {
    var name2Input = document.getElementById('name2Input').value;
    /*console.log(name2Input)*/
    /*var color2Input = document.getElementById('color2Input').value;
    var font2Input = document.getElementById('font2Input').value;
    var delete2Input = document.getElementById('delete2Input').value;*/
    
    obj2.push(name2Input);
    // var obj2 = this.name[name2Input]
    /*console.log(obj2)*/
    var option = document.createElement('option')
    var optionParent = document.querySelector('#nameShow');
    option.innerHTML = name2Input;
    optionParent.appendChild(option)
    var getOption = document.getElementById('nameShow').value;
    // console.log(getOption)
    // console.log(obj2)
    if(getOption != '') {
        for(var i = 0; i < obj2.name.length; i++) {
            if(obj2.name[i] == getOption) {
                obj2.name[i] = name2Input;
            }
            
        }
        console.log(obj2.name)
        
    }
           
        
    
    
}

cont = document.getElementById('root')

var renderShow = () => {
    
    /*var obj2 = new listHeader();*/
    cont.innerHTML = obj2.render()
    console.log(obj2)
    // render2();
}

var colorChange = () => {
    var color2Input = document.getElementById('color2Input').value;
    cont.style.color = color2Input;
}

var fontChange = () => {
    var font2Input = document.getElementById('font2Input').value;
    cont.style.fontSize = font2Input + 'px';
}

var deleteName = () => {
    var getOption = document.getElementById('nameShow').value;
    for(var i = 0; i < obj2.name.length; i++) {
        if(obj2.name[i] == getOption) {
            obj2.name[i] = "";
        }
    }
}

// var updateName = () => {
//     var getOption = document.getElementById('nameShow').value;
//     console.log(getOption)
// }

/*console.log(obj.name);*/

/*function nameChange () {
    var nameInput = document.getElementById('nameInput').value;
    var fontInput = document.getElementById('fontInput').value;
    var colorInput = document.getElementById('colorInput').value;
    var obj = new Header(nameInput, colorInput, fontInput)
    console.log(obj)
    obj.displayDetails();
    cont = document.getElementById('root')
    cont.style.color = colorInput;
    cont.style.fontSize = fontInput + "px";
    cont.innerHTML = obj.render()
}

function colorChange () {
    var nameInput = document.getElementById('nameInput').value;
    var fontInput = document.getElementById('fontInput').value;
    var colorInput = document.getElementById('colorInput').value;
    var obj = new Header(nameInput, colorInput, fontInput)
    console.log(obj)
    obj.displayDetails();
    cont = document.getElementById('root')
    cont.style.color = colorInput;
    cont.style.fontSize = fontInput + "px";
    cont.innerHTML = obj.render()
}

function fontChange () {
    var nameInput = document.getElementById('nameInput').value;
    var colorInput = document.getElementById('colorInput').value;
    var fontInput = document.getElementById('fontInput').value;
    var obj = new Header(nameInput, colorInput, fontInput)
    console.log(obj)
    obj.displayDetails();
    cont = document.getElementById('root')
    cont.style.color = colorInput;
    cont.style.fontSize = fontInput + "px";
    cont.innerHTML = obj.render()
}*/