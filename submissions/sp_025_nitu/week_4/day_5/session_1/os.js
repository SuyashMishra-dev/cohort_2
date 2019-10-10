var OS =document.getElementById('id1').value;
function getUserData(displayFunction){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    if (OS == 'android'){
    xhr.open('GET','http://localhost:8080/codenames/android');
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
       var  result = JSON.parse(xhr.response);
       console.log(result.codenames.length);
       // displayFunction(result);
       var table=document.getElementById('tableDisplay');
       for ( var i=0;i<result.codenames.length;i++){
        var tr=document.createElement('tr');
        var td1 =document.createElement('td');
        td1.textContent=result.codenames[i].name;
        tr.appendChild(td1);
        var td2 =document.createElement('td');
        td2.textContent=result.codenames[i].version;
        tr.appendChild(td2);
        table.appendChild(tr);
       }
       
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
   } 
  if(OS == 'ubuntu'){
    xhr.open('GET','http://localhost:8080/codenames/ubuntu');
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        var  result = JSON.parse(xhr.response);
       console.log(result.codenames.length);
        //displayFunction(result);
        var table=document.getElementById('tableDisplay');
       for ( var i=0;i<result.codenames.length;i++){
        var tr=document.createElement('tr');
        var td1 =document.createElement('td');
        td1.textContent=result.codenames[i].name;
        tr.appendChild(td1);
        var td2 =document.createElement('td');
        td2.textContent=result.codenames[i].version;
        tr.appendChild(td2);
        table.appendChild(tr);
       }
       
        
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
   
   }
   if (OS == 'windows'){
    xhr.open('GET','http://localhost:8080/codenames/windows');
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        var  result = JSON.parse(xhr.response);
       console.log(result.codenames.length);
        //displayFunction(result);
        var table=document.getElementById('tableDisplay');
       for ( var i=0;i<result.codenames.length;i++){
        var tr=document.createElement('tr');
        var td1 =document.createElement('td');
        td1.textContent=result.codenames[i].name;
        tr.appendChild(td1);
        var td2 =document.createElement('td');
        td2.textContent=result.codenames[i].version;
        tr.appendChild(td2);
        table.appendChild(tr);
       }
       
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
   
   }
   if (OS == 'macos'){
    xhr.open('GET','http://localhost:8080/codenames/macos');
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        var  result = JSON.parse(xhr.response);
       console.log(result.codenames.length);
        //displayFunction(result);
        var table=document.getElementById('tableDisplay');
       for ( var i=0;i<result.codenames.length;i++){
        var tr=document.createElement('tr');
        var td1 =document.createElement('td');
        td1.textContent=result.codenames[i].name;
        tr.appendChild(td1);
        var td2 =document.createElement('td');
        td2.textContent=result.codenames[i].version;
        tr.appendChild(td2);
        table.appendChild(tr);
       }
       
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
     } 
   }
}
  
  
  var printUserData = function (input){
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
  
  var displayBtn = document.querySelector('#printUsers')
  displayBtn.addEventListener('click',function(){
    getUserData(printUserData);
  });


