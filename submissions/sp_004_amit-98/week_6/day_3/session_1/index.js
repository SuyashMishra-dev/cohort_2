var names=[];
class Header{
    constructor(name,color,fontSize)
    {
        this.name=name;
        this.color=color;
        this.fontSize=fontSize;
    }
}

    function displayDetails()
    {
        for(var i=0;i<names.length;i++)
        {
        console.log(names[i].name);
        console.log(names[i].color);
        console.log(names[i].fontSize);
        }

    }

    function submitDetails()
    {
       var name=document.getElementById('input1').value;
       var color=document.getElementById('input2').value;
       var fontSize=document.getElementById('input3').value;
       var header = new Header(name,color,fontSize);
       names.push(header);
       var select=document.getElementById("selectName");
    //    for(var i=0;i<names.length;i++)
    //    {
       var options=document.createElement('option');
       options.textContent=name;
       select.appendChild(options);
    //    }
       
    }
    function updateName()
    {
     var select=document.getElementById("selectName").value;
     var updateName=document.getElementById("input4").value;

     for(var i=0;i<names.length;i++)
     {
         if(select==names[i].name)
         {
             names[i].name=updateName;
         }
     }
     console.log(names.length)

    }
    function deleteName()
    {
     var select=document.getElementById("selectName").value;
     console.log(select);
     for(var i=0;i<names.length;i++)
     {
         if(select==names[i].name)
         {
             names[i].pop();
         }
     }

    }
   
   function render()
    {
        var divs=document.getElementById("renderData");
        for(var i=0;i<names.length;i++)
        {
            var h1=document.createElement("h1");
            h1.innerHTML=names[i].name;
            h1.style.fontSize=names[i].fontSize +'px';
            h1.style.color=names[i].color;
            divs.appendChild(h1);
        }
    }