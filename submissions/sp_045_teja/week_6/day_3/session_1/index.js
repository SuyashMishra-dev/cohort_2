class Header {
    constructor(name,color,fontsize) {
        this.name = name
        this.color = color
        this.fontsize = fontsize
    }

    render(){
        console.log("hi")
        this.displayDetails()
        return `<h1 style=color:${this.color};font-size:${this.fontsize}> ${this.name}</h1>`
    }

    updateName(int) {
        this.name = int;
    }

    updateColor(col) {
        this.color = col;
    }

    updateFontsize(font) {
        this.fontsize = font;
    }

    displayDetails() {
        console.log(this.name,this.color,this.fontsize)
    }

}

var name_stack = new Header('Tejas','black','20px')

function render() {
    cont = document.getElementById("root");
    cont.innerHTML = name_stack.render()

}

function nam() {
   int = document.getElementById("input1").value;
   console.log(int)
   name_stack.updateName(int)
}

function col() {
    col = document.getElementById("input2").value;
    console.log(col)
    name_stack.updateColor(col)
}

function font() {
    font = document.getElementById("input3").value;
    console.log(font)
    name_stack.updateFontsize(font)
}


let count = 0;

class listHeader extends Header {
    constructor(name) {
        super(name)
        this.name = [name]
    }

    // render1() {
    //     for (var i = 0; i < this.name.length; i++){
    //     return this.name[i]
    //     }
    // }

    pushes(names) {
        this.displayDetails()
        this.name[this.name.length] = names;
    }

    remove() {
        this.displayDetails()
        this.name.pop();
    }
}

let arrname_stack = null;

function name1() {
   cont2 = document.getElementById('input4').value;
   if(count == 0) {
    arrname_stack = new listHeader(cont2);
    arrname_stack.displayDetails()
    dropdown(arrname_stack)
    count++
   }
   else if(count > 0){
       arrname_stack.pushes(cont2);
       dropdown(arrname_stack)
   }
}

// function render1() {
//     cont1 = document.getElementById("root2")
//     var a = arrname_stack.render1();
//     a.forEach(element => {
//         var elem=document.createElement('h1')
//         elem.innerHTML=element;
//         cont1.appenChild(elem)
//     });
// }

function dropdown(items) {
    cont3 = document.getElementById('select1');
    cont3.innerHTML = "";
    for(var i = 0; i < items.name.length; i++) {
        var opt = document.createElement("option");
        opt.setAttribute("value", items.name[i]);
        opt.textContent = items.name[i];
        select1.appendChild(opt)
    }

}

function del() {
    var elems = document.getElementById("select1").value;
    let tempArr = arrname_stack.name.filter((element) => {
        if(element != elems) {
            return element;
        }
    })
    
    console.log(tempArr);

    arrname_stack.name = tempArr;
    dropdown(arrname_stack)
}

function updatename() {
    var elems = document.getElementById("select1").value;
    var cont2 = document.getElementById('input4').value;
    let nameArr = arrname_stack.name.map((element) => {
        if(element == elems) {
            return cont2;
        }
        else return element;
    })
    arrname_stack.name = nameArr;
    dropdown(arrname_stack)    

}



