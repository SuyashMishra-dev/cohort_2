class header{
    constructor(name,color,size) {
      this.name= name;
      this.color=color;
      this.size=size;
    }
    
    render()
    {
      this.displayName()
      return`<div> <h1> ${this.name} ${this.color} ${this.size}</h1> </div>`;
    }
     
    push(name,color,size)
      {
        this.name[this.name.length] = name;
        this.color[this.color.length] = color;
        this.size[this.size.length] = size;
        this.displayName()
        // console.log(this.name)
      }

      displayName(){
        console.log(
          
          `Name:${this.name};
          Color:${this.color};
          Size:${this.color};
          `
          )
        }

      Name(name){
        this.name=name;
      }

      Color(color){
        this.color=color;
      }
      Size(Size){
        this.size=size;
      } 

      }
  
    var inputStack = new header('Name:')
    var sizeStack = new header('size')
    var colorStack = new header('color')

    function render(){
      cont = document.getElementById('inputText')
      cont.innerHTML = inputStack.render()

      cont1=document.getElementById("inputText")
      cont1.innerHTML = sizeStack.render()
      cont1.style.fontSize = "1 px";
      
      cont2=document.getElementById("inputText")
      cont2.innerHTML = colorStack.render()
      cont2.style.color = "red";
    }