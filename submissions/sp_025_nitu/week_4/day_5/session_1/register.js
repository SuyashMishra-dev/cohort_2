function sendData(objData){
    var xhr = new XMLHttpRequest();
  
    var json = JSON.stringify(objData);
    
    xhr.addEventListener('load', function(){
      if(xhr.status <= 400){
        printResponse(xhr.response)
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    });
    
    xhr.addEventListener('error', function(event){
      console.log('Error in HTTP request!')
    });
  
    xhr.open("POST", 'https://reqres.in/api/users')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    
  }
  //Prints the response from the server!
  function printResponse(input){
    console.log(input)
    var body = document.querySelector('body')
    var outputPara = document.createElement('p')
    outputPara.textContent = input
    body.append(outputPara)
  }
  
  var form = document.querySelector('#sendForm')
  
  form.addEventListener('submit', function(event){
    event.preventDefault(); //Prevents the default behavior of the submit event!
    var inputElements = document.querySelectorAll('.formEle')
    var postObject = {
      name : inputElements[0].value,
      job: inputElements[1].value
    }
    sendData(postObject)
  });
  
  