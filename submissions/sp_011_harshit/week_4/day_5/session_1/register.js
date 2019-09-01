var form=document.querySelector("#formsend")

form.addEventListener('submit',function(event){

    event.preventDefault();

    var fillelem=document.querySelectorAll('.regstr')

    var objectdata = {
        name : fillelem[0].value ,
        email : fillelem[1].value,
        password : fillelem[2].value,
        username : fillelem[3].value,
        mobile : fillelem[4].value,
        description : fillelem[5].value
}
     sendpost(objectdata)
})

function sendpost(objectdataa)
{
var xhr = new XMLHttpRequest();
var json1 =JSON.stringify(objectdataa)
console.log(json1)
xhr.addEventListener('load',function()
{
     if(xhr.status<=400)
     {
         printresponse(xhr.response)
        
     }
   
     else
    {
         console.log("error")
     }
})

xhr.addEventListener('error',function(event){

    console.log("errorin http")
})

xhr.open('POST','http://localhost:8080/auth/register')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(json1)
}

function printresponse(input)
{
    var body=document.querySelector('body');
    var pp=document.createElement('p')
    pp.textContent=input
    body.appendChild(pp)
    Console.log(pp)
}