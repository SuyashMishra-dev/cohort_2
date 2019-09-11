$(document).ready(function(){
    var i=1;
    var itemList =[];
    var addItems=[];
    class Items{
      itemname;
      constructor(item){
          console.log("constructor called");
          this.itemname=item;
        //  console.log(this.itemname);
      }
    }
     $('#submitBtn').click(function(event){
        var items = $('#addItem').val();
        var newItem = new Items(items);
        itemList.push(newItem);
        console.log(items);
        console.log(itemList);
        event.preventDefault();
        var object = document.createElement("h5");
        object.setAttribute("id",'listitems'+i++);
        object.setAttribute("class","alert alert-primary");
        var para = document.createElement("p");
        para.innerHTML=newItem.itemname;
        object.appendChild(para);
        $('#todoList').append(object);
        var divs = document.querySelector('#todoList').querySelectorAll("div").length;
        console.log(divs);
       
    })

    
    
   $('#todoList').click(function(){
      var a = $(this);
      console.log(a); 
    var eleName = $(this)[0].innerText;
    console.log("..."+eleName);
    $(this).removeClass("alert alert-primary");
    //$(this).addClass("alert alert-danger");
    eleName = eleName.split("\n");
    console.log(eleName);
    var object = document.createElement("div");
     
     var del = document.createElement("del");
     del.innerHTML=eleName;
     //($(this)[0].innerText).html(del);
     $(this).html(del);

    
  
      })

})
