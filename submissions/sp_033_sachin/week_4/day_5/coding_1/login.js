var form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    var loginInfo = {
        password:document.getElementById('password').value,
        username:document.getElementById('username').value
    }

    login(loginInfo);
});

var login = function(data) {
    var jsonData = JSON.stringify(data);
    var xhr = new XMLHttpRequest;
    // console.log(jsonData);
    xhr.addEventListener('load',function(){
        if (xhr.status <= 400) {
            // console.log(xhr.response);
            loginUser(JSON.parse(xhr.response),data.username);
        } else {
            console.log('Error On Load'+xhr.response)
        }        
    })

    xhr.addEventListener('error',function(event){
        alert('The username or password was incorrect, please try again!');
        console.log('Error Event Listener');
    })

    xhr.open('POST','http://localhost:8080/auth/login');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(jsonData);
}

var loginUser = function(resData,uname) {    
    
    var xhr = new XMLHttpRequest;
    xhr.open('GET','http://localhost:8080/user/'+uname);
    xhr.setRequestHeader('Authorization','Bearer '+resData.token);
    xhr.send();

    xhr.onload = function() {
        
        if (xhr.status == 200) {
            console.log('no error'+xhr.response);
            displayUser(JSON.parse(xhr.response));
        }else {
            console.log('Error'+xhr.response);
        }
    }
    
}

var displayUser= function(userData) {
    var bodyEl = document.querySelector('body');
    bodyEl.innerHTML = '';

    for(key in userData){
        var ptag = document.createElement('p');
        ptag.innerHTML = key +': ' +userData[key];
        bodyEl.appendChild(ptag);
    }
}