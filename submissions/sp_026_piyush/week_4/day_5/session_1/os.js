//Button and listener for the `Submit` button
var submitBtn = document.querySelector('#submitButton');

submitBtn.addEventListener('click', function() {
getOsData(printOsData);
});


function getOsData(displayFunction) {
  var result = null;
  var osName = document.getElementById('selectedOs').value;
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'http://localhost:8080/codenames/' + osName);
  xhr.send()
  xhr.onload = function (){
    if(xhr.status == 200){
      result = xhr.response;
      displayFunction(result);
    }
    else{
      console.log("Error Code is:" + xhr.status);
    }
  } 
}

var printOsData = function (input) {
  var body = document.querySelector('body');
  var display = document.createElement('div');
  
  if(input == null){ // checking if the input is null
    display.textContent = "Error! No user data received or invalid request!";
    //It will print an error if the input is null
  }
  else{
    var parsedData = JSON.parse(input);
    //Else ->  Otherwise it will display the information in a tabular format

    var elemBody = document.querySelector('body');
    elemBody.appendChild(display);

    var osName = document.createElement('p');
    display.appendChild(osName);
    osName.textContent = 'Operating System : ' + parsedData.os;

    var table = document.createElement('table');
    display.appendChild(table);

    for (i = 0; i < parsedData.codenames.length; i ++) {
      var row = document.createElement('tr');
      table.appendChild(row);
      
      var td1 = document.createElement('td');
      row.appendChild(td1);
      td1.textContent = 'Version : ' + parsedData.codenames[i].version;
      
      var td2 = document.createElement('td');
      row.appendChild(td2);
      td2.textContent = 'Name : ' + parsedData.codenames[i].name;
    }
  }
  // body.append(display);
}























// http://localhost:8080/codenames/<os_name> 

/*
var printOsData = function() {

}

function getOsData () {

}

//Everything underneath this is going to be commented out and hence should not get executed...
//########################################
var xhr = new XMLHttpRequest(); 

  // This configures the object to perform a GET request to the given url
  // Notice how we pass page=2
  xhr.open('GET', 'https://reqres.in/api/users?page=2');
  // This will send the GET request to the server.
  xhr.send()
  // This function will be called after the information is retrieved
  xhr.onload = function (){
    // The HTTP 200 code is returned when your request is successful so we check for that
    if(xhr.status == 200){
        console.log(xhr.response) // Print the response from the server after a successful request
    }
    else{
        console.log("Error Code is:" + xhr.status)
    }
  }
//##########################################



//##########################################
function callApi() {
    var xhr = new XMLHttpRequest(); 
  
    // This configures the object to perform a GET request to the given url
    // Notice how we pass page=2
    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    // This will send the GET request to the server.
    xhr.send()
    // This function will be called after the information is retrieved
    xhr.onload = function (){
      // The HTTP 200 code is returned when your request is successful so we check for that
      if(xhr.status == 200){
          console.log(xhr.response) // Print the response from the server after a successful request
      }
      else{
          console.log("Error Code is:" + xhr.status)
      }
    }
  }
//##########################################



//##########################################
// This function will get JSON data from the server and call the printWeatherData function!
//The argument displayFunction is a function!

function getUserData(displayFunction){ // displayFunction = callBack from yesterday's(W4 D4 C1 or C2) coding session
    var result = null;
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        displayFunction(result); // similar to callBack(result) or callBack(total) or even callBack(exponent)
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
  }
  
  // This function will check the input to see if it is null and print the input to a p tag if it is not null.
  var printUserData = function (input){
    var body = document.querySelector('body');
    var display = document.createElement('p');
    if(input == null){ // checking if the input is null
      display.textContent = "Error! No user data received or invalid request!";
      //It will print an error if the input is null
    }
    else{
      display.textContent = input;
      //Otherwise it will display the text
    }
    body.append(display);
  }
  
  //Button and listener for the `click here to print the user data!` button
  var displayBtn = document.querySelector('#printUsers')
  displayBtn.addEventListener('click',function(){
    getUserData(printUserData);
  });
//##########################################



//##########################################

// This function will get JSON data from the server and call the printUserData function!
//The argument displayFunction is a function!
//The argument user_id is a string from the input with id = "user"
function getUserData(displayFunction, user_id){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var url = 'https://reqres.in/api/users/'
             +user_id
    xhr.open('GET', url); //Here I have simply appended user_id to the string
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        displayFunction(result);
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
  }
  
  // This function will check the input to see if it is null and print the input to a p tag if it is not null.
  var printUserData = function (input){
    var body = document.querySelector('body');
    var display = document.createElement('p');
    if(input == null){ // checking if the input is null
      display.textContent = 'Error! No user data received or invalid request!';
      //It will print an error if the input is null
    }
    else{
      display.textContent = input;
      //Otherwise it will display the text
    }
    body.append(display);
  }
  
  //Button and listener for the `click here to print the weather data!` button
  var displayBtn = document.querySelector('#printUser')
  displayBtn.addEventListener('click',function(){
    var user_id = document.querySelector('#user').value
    getUserData(printUserData, user_id);
  });
//##########################################



//##########################################

//The argument displayFunction is a function!
function getData(displayFunction){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    xhr.addEventListener('progress', function(event){
       console.log('Received ' + event.loaded + ' of '+event.total+ 'bytes')
    });
    xhr.addEventListener('load', function (){
      if(xhr.status == 200){
        result = xhr.response;
        printData(result);
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    }); 
    xhr.addEventListener('error', function() {
      alert("Request failed");
    });
    xhr.open('GET', 'https://raw.githubusercontent.com/masai-school/cohort_1/master/README.md');
    xhr.send()
  }
  
  // This function will check the input to see if it is null and print the input to a p tag if it is not null.
  var printData = function (input){
    var body = document.querySelector('body');
    var display = document.createElement('p');
    if(input == null){ // checking if the input is null
      display.textContent = "Error! No data received or invalid request!";
      //It will print an error if the input is null
    }
    else{
      display.textContent = input;
      //Otherwise it will display the text
    }
    body.append(display);
  }
  
  //Button and listener for the `cClick here to print the markdown file` button
  var displayBtn = document.querySelector('#printWeather')
  displayBtn.addEventListener('click',function(){
    getData(printData);
  });
//##########################################




//##########################################

//Sends form data to the server as a JSON
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
  
//##########################################
  */