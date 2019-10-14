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
        // document.querySelector('#container').innerHTML = this.render();
    }
    
    updateColor(newColor) {
        this.color = newColor;
        // document.querySelector('#container').innerHTML = this.render();
    }

    updateFontSize(newSize) {
        this.fontSize = newSize;
        // document.querySelector('#container').innerHTML = this.render();
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

class listHeader extends Header {
    constructor(name) {
        super(name);
        this.name = [name];
    }

    displayDetails() {
        console.log(`Name is ${this.name}, Color is ${this.color}, Font Size is ${this.fontSize}`);
    }

    render() {
        console.log(this.name);
        // return `<h1 style='color: ${this.color}; font-size: ${this.fontSize}px;'> ${this.name[0]} </h1>`;

        // console.log( this.name.map(element => `<h1 style='color: ${this.color}; font-size: ${this.fontSize}px;'> ${element} </h1>`));

        // for(var i = 0; i < this.name.length; i++) {
        //   var element = document.getElementById('update');
        //   var option = document.createElement('option');
        //   option.value = this.name[i];
        //   option.textContent = this.name[i];
        //   // console.log(option.value);
        //   element.appendChild(option);

        //   var elementDelete = document.getElementById('delete');
        //   var option = document.createElement('option');
        //   option.value = this.name[i];
        //   option.textContent = this.name[i];
        //   // console.log(option.value);
        //   elementDelete.appendChild(option);
        // }
        this.populateDropDown();
        
        return this.name.map(element => `<h1 style='color: ${this.color}; font-size: ${this.fontSize}px;'> ${element} </h1>`);
        // return displayData;
        
    }

    populateDropDown() {
      for(var i = 0; i < this.name.length; i++) {
        var element = document.getElementById('update');
        var option = document.createElement('option');
        option.value = this.name[i];
        option.textContent = this.name[i];
        // console.log(option.value);
        element.appendChild(option);

        var elementDelete = document.getElementById('delete');
        var option = document.createElement('option');
        option.value = this.name[i];
        option.textContent = this.name[i];
        // console.log(option.value);
        elementDelete.appendChild(option);
      }
    }

    push(name){
        this.name[this.name.length] = name;
    }

    deleteName() {
      var toDelete = document.getElementById('delete').value;
      // console.log(this.name.filter(elem => elem === toDelete));
      for(var i = 0; i < this.name.length; i++) {
        if(this.name[i] === toDelete) {
          this.name.splice(i, 1)
        }
      }
      this.populateDropDown();
    }
   
}

var listHeading = new listHeader('Arunabh');
// listHeading.push('ArunabhSingh');
// listHeading.displayDetails();
// listHeading.updateColor('red');




/*
class myClass{
  constructor(company){
    this.company = company
    this.name = [company]
    console.log(this.company)
  }
  render(){
    console.log('rendering')
    this.displayName()
    return `<h1> ${this.name} </h1>`

  }
  push(name){
    this.name[this.name.length] = name
    this.displayName()
    // console.log(this.name)
  }
  top(){
    console.log(this.name[this.name.length-1])
  }
  remove(){
    this.name.pop()
    this.displayName()
    // console.log(this.name)
  }
  displayName(){
    console.log('display Name',this.name)
  }
}






var masai_stack = new myClass('Masai')

function render(){
  cont = document.getElementById('root')
  cont.innerHTML = masai_stack.render()
}

var x = new Array(10).fill(0)
console.log(x)
console.log(masai_stack.name)

*/




// var arr = [1,2,4,5,6,4]
// arr = arr.map((element) => 
// {element * 5})