// This function will get JSON data from the server and call the printUserData function!
//The argument displayFunction is a function!
//The argument user_id is a string from the input with id = "user"
function getUserData(displayFunction, user_id) {
  var result = null;
  var xhr = new XMLHttpRequest();
  var url = ' http://localhost:8080/codenames/'
    + user_id
  xhr.open('GET', url); //Here I have simply appended user_id to the string
  xhr.send()
  xhr.onload = function () {
    if (xhr.status == 200) {
      result = xhr.response;
      displayFunction(result);
    }
    else {
      console.log("Error Code is:" + xhr.status);
    }
  }
}

// This function will check the input to see if it is null and print the input to a p tag if it is not null.
var printUserData = function (input) {
  var body = document.querySelector('body');
  var display = document.createElement('p');
  if (input == null) { // checking if the input is null
    display.textContent = 'Error! No user data received or invalid request!';
    //It will print an error if the input is null
  }
  else {
   display.textContent=input;
   var object = JSON.parse(input);
   console.log(object.codenames.length)
   var table = document.querySelector('#osTable');
     for (var i = 0 ; i <= object.codenames.length;i++){
       var tr1 = document.createElement('tr');
       
    var td1 = document.createElement('td');
    td1.textContent = object.codenames[i].name;
    tr1.appendChild(td1)
    var td2 = document.createElement('td');
    td2.textContent = object.codenames[i].version;
    tr1.appendChild(td2)
    table.appendChild(tr1)
  }
    

    //Otherwise it will display the text
  }
  body.append(display);
}

//Button and listener for the `click here to print the weather data!` button
var displayButton = document.querySelector('#print-user');
console.log(displayButton);
displayButton.addEventListener('click', function () {
  
  var user_id = document.querySelector('#user').value;
  getUserData(printUserData, user_id);
});