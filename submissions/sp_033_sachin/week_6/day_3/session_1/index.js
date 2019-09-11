let newHeader = null;
let newListHeader = null;
let displayContainer = document.getElementById('displayContainer');
let exDisplayContainer = document.getElementById('exDisplayContainer');
class Header {
    //name , color, font-size
    constructor(name){
        this.name = name;
        this.color = 'black';
        this.fontSize = 20;
    }

    displayDetails() {
        console.log(this.name,this.color,fontSize)
        
    }

    updateName(newName){
        this.name = newName 
    }

    updateColor(newColor) {
        this.color = newColor;
    }

    updateFontSize(newFontSize) {
        this.fontSize = Number(newFontSize);
    }

    render() {
        let divEl = document.createElement('div');
        let h1El = document.createElement('h1');
        h1El.textContent = this.name;
        h1El.style.color = this.color;
        h1El.style.fontSize = this.fontSize+'px';
        divEl.appendChild(h1El);
        return divEl;
    }

}

const coruName = () => {
    let nameInput  = document.getElementById('nameInput').value;
    if (newHeader == null) {        
        newHeader = new Header(nameInput);
        return false;
    } else {        
        newHeader.updateName(nameInput);
        displayContainer.innerHTML = '';
        displayContainer.appendChild(newHeader.render());
        return true;
    }
}

const uColor = () => {
    let colorInput = document.getElementById('colorInput').value;
    if (newHeader == null) {
        console.log('Enter Name First');
        return false
    } else {
        newHeader.updateColor(colorInput);
        displayContainer.innerHTML = '';
        displayContainer.appendChild(newHeader.render());
        return true;
    }    
}

const uFontSize = ()=> {
    let fontSizeInput = document.getElementById('fontSizeInput').value;
    if (newHeader == null) {
        console.log('Enter Name First');
        return false
    } else {
        newHeader.updateFontSize(fontSizeInput);
        displayContainer.innerHTML = '';
        displayContainer.appendChild(newHeader.render());
        return true;
    }
}

const render = () => {
    
    if (newHeader == null) {
        return false;
    } else {
        displayContainer.innerHTML = '';
        displayContainer.appendChild(newHeader.render());
    }
}

class ListHeader extends Header {
    constructor(name){
        super(name);
        this.name = [name];    
    }

    render(){
        let divCont = document.createElement('div');
        this.name.forEach(n=>{
            let divEl = document.createElement('div');
            let h1El = document.createElement('h1');
            h1El.textContent = n;
            h1El.style.color = this.color;
            h1El.style.fontSize = this.fontSize+'px';
            divEl.appendChild(h1El);
            divCont.appendChild(divEl);
        })
        return divCont;
    }

    namePush(newName){
        //this.name[this.name.length]=newName
        this.name.push(newName)
    }

    deleteName(na){
        this.name = this.name.filter(el=>el!=na);
    }

    updateName(oldName,newName){
        this.name = this.name.map(el=>{
            if (el==oldName) {
                return newName
            } else {
                return el;
            }
        })
    }
}

const exName = () => {
    let exNameInput = document.getElementById('exNameInput').value;
    if (newListHeader == null) {
        newListHeader = new ListHeader(exNameInput);
        createOptions(newListHeader.name);
    } else {
        newListHeader.namePush(exNameInput);
        createOptions(newListHeader.name);
    }
}

const exColor = () => {
    let exColorInput = document.getElementById('exColorInput').value;
    if (newListHeader == null) {
        return false;
    } else {
        newListHeader.updateColor(exColorInput);
        exDisplayContainer.innerHTML = '';
        exDisplayContainer.appendChild(newListHeader.render());
        return true;
    }
}

const exFontSize = () => {
    let exFontSizeInput = document.getElementById('exFontSizeInput').value;
    if (newListHeader == null) {
        return false;
    } else {
        newListHeader.updateFontSize(exFontSizeInput);
        exDisplayContainer.innerHTML = '';
        exDisplayContainer.appendChild(newListHeader.render());
        return true;
    }
}

const exDelete = () => {
    let exDeleteName = document.getElementById('exDeleteName').value;
    if (newListHeader == null) {
        return false;
    } else {
        newListHeader.deleteName(exDeleteName);
        exDisplayContainer.innerHTML = '';
        exDisplayContainer.appendChild(newListHeader.render());
        createOptions(newListHeader.name);
        return true;
    }
}

const exRender = () => {
    if (newListHeader == null) {
        return false;
    } else {
        exDisplayContainer.innerHTML = '';
        exDisplayContainer.appendChild(newListHeader.render());                
    }
}

const createOptions = (arr) => {
    let selectName = document.getElementById('selectName');
    selectName.innerHTML = '';
    arr.forEach(el=>{
        let option = document.createElement('option');
        option.textContent = el;
        option.setAttribute('value',el);
        selectName.appendChild(option);
    });
    return true;
}

const exUpdateName =()=>{
    let newName = document.getElementById('exNameInput').value;
    let oldName = document.getElementById('selectName').value;
    // console.log(oldName,newName)
    newListHeader.updateName(oldName,newName);
    createOptions(newListHeader.name);
}