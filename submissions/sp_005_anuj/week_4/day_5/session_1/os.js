function getUserData(displayFunction,request) {
  var result = null;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8080/codenames/android');
  xhr.send()
  xhr.onload = function() {
    if(xhr.status == 200){
      result = xhr.response;
      displayFunction(result);
    }
  }
}

var show = function (input) {
  var body = document.querySelector('body');
  var body = document.querySelector('body');
  var display = document.createElement('p');
  if(input == null){
    display.textContent = "Error! No user data received or invalid request!";
   
  }
  else{
    display.textContent = input;
  }
  body.append(display); 
}
var displayBtn = document.querySelector('#show')
displayBtn.addEventListener('click',function(){
  getUserData(show);
});
