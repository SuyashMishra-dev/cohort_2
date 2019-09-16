var submitDetails = document.querySelector('button');
var getUserData = document.querySelectorAll('input');
submitDetails.addEventListener('click' , function (event) {
  event.preventDefault();
  sendData = {
    name : getUserData[0].value,  
    email : getUserData[1].value,
    password : getUserData[2].value,
    username : getUserData[3].value,
    mobile : getUserData[4].value,
    description : getUserData[5].value,
  
    
    
  };
  serverSend(sendData);
})




function serverSend (sendData) {
  var xhr = new XMLHttpRequest();
  var sendString = JSON.stringify(sendData);
  xhr.addEventListener('load' , function () {
    if(xhr.response == 401) {
      console.log('Error');
    }
  })
xhr.open("post" , "http://localhost:8080/auth/register");
xhr.setRequestHeader('content-type' , 'application/json;charset = utf - 8');
xhr.send(sendString);


}