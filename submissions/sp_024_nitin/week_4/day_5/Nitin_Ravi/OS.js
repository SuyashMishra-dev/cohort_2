



function operation() {
    var request = document.getElementById('factual').value;
    //console.log(request)
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/codenames/" + request;
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
      if(xhr.status == 200) {
        console.log(xhr.response);
        response = JSON.parse(xhr.response);
        displayUser(response);
        }  
      else {
          console.log("Error Code is:" + xhr.status);
      }
    }
}
//var one = 'one';
function displayUser(request) {
    //clearTables();
    var tabledestination = document.querySelector('table');
    var tr1 = document.createElement('tr');
    
    var th1 = document.createElement('td');
    th1.innerHTML = 'Name';
    tr1.appendChild(th1);
    tabledestination.appendChild(tr1);
    
    var th2 = document.createElement('td');
    th2.innerHTML = 'Version';
    tr1.appendChild(th2);
    tabledestination.appendChild(tr1);

    for(var i = 0; i < request.codenames.length; i++) {
        var tr2 = document.createElement('tr');
        
        var td3 = document.createElement('td');
        td3.innerHTML = request.codenames[i].name;
        tr2.appendChild(td3);
        
        var td4 = document.createElement('td');
        td4.innerHTML = request.codenames[i].version;
        tr2.appendChild(td4);
        
        tabledestination.appendChild(tr2);
    }
}

// function clearTables() {
//     var tablesclear = document.querySelectorAll('table, tr');
//     for(var i = 0; i < tablesclear.length; i++) {
//         tabledestination.removeChild(tablesclear[i]);
//     }
// }