$(document).ready(function(){
   
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
    class listHeader extends Header{
        constructor(newname){
            console.log("..."+newname);
            super();
            this.newname=newname;
            this.name = [newname];
            console.log(this.newname);
        }
     add(newName){
        this.name[this.name.length] = newName;
        var listname = document.querySelector('#updateNameId');
        var option=document.createElement("option");
        option.innerHTML= newName;
        listname.append(option);
       
     }
     show(){
       
       var  that = this.name;
       var title = document.getElementById('dataVal');

        for(var i=1;i<that.length;i++){
            var divs = document.createElement("h1");
            divs.innerHTML=that[i];
            title.appendChild(divs);
        }
        
     }
     delName(name){
      var that = this.name;
      that.pop(name);
      var listname = document.querySelector('#updateNameId');
      var divs = document.querySelectorAll("option");
      console.log(divs);
      for(var i=0;i<divs.length;i++){
      listname.removeChild(divs[i]);
    }
    for(var i=1;i<that.length;i++){
        var option=document.createElement("option");
        option.innerHTML= that[i];
        listname.appendChild(option);
    }
     }
    }
    var newHead= new Header();
    var newListHeader = new listHeader();
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
    $('#newRen').click(function(event){
        event.preventDefault();
       var title = document.getElementById('dataVal');
        newListHeader.show();
      
    })
    $('#updateNameBtn').click(function(event){
        var uname = $('#Uname').val();
      
       event.preventDefault();
       newHead.updateName(uname);
     
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
    
    
   $('#updateNameBtnNew').click(function(event){
       var upname = $('#updatedName').val();
       console.log(upname)
       newListHeader.add(upname);
       event.preventDefault();
       console.log("yes clicked");
       
      
   })
   $('#delBtn').click(function(){
       var delName = $('#updateNameId').val();
       event.preventDefault();
       console.log(delName);
       newListHeader.delName(delName);
   })
})