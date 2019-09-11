$(document).ready(function(){
    var title1 = document.getElementById('dataVal').value;
    console.log(title1);
    class Header{
        name;
        color;
        font_size;
        constructor(name,color,fontSize){
          this.name= name 
          this.color=color || "black";
          this.font_size=fontSize || "20px";
        }
        displayDetails(){
            console.log("The name is "+this.name+" , color is "+this.color+",font-size is "+this.font_size);
        }
        render(){
        console.log("rendering..");
        console.log(this)
        return `<h1 style="color:${this.color};font-size:${this.font_size}">${this.name}</h1>`;
        }
        updateName(uname){
            this.name=uname;
        }
        updateColor(ucolor){
            this.color=ucolor;
        }
        updateFontSize(ufont){
            this.font_size=ufont;
        }
    }
    var newhead= new Header();
    
    $('#displayBtn').click(function(event){
        var head = $('#name').val();
        var color=$('#color').val();
        var fntSize=$('#fontSize').val();
        console.log(head);
        event.preventDefault();
         newHead= new Header(head,color,fntSize);
        newHead.displayDetails();
    })
    $('#renderBtn').click(function(event){
        event.preventDefault();
       var title = document.getElementById('dataVal');
        title.innerHTML =newHead.render();
      
    })
    $('#updateNameBtn').click(function(event){
        var uname = $('#Uname').val();
       var headName = new Header();
       event.preventDefault();
       headName.updateName(uname);
     
    })
    $('#updatenFontBtn').click(function(event){
        var ufont = $('#UfontSize').val();
        event.preventDefault();
       newHead.updateFontSize(ufont);
      
    })
    $('#updatenColrBtn').click(function(event){
       var ucolor = $('#Ucolor').val();
        event.preventDefault();
       newHead.updateColor(ucolor);
       
      
    })
   
})