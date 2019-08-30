var loginButton = document.querySelector("button");
var inputs = document.querySelectorAll("input");
var loginDiv = document.querySelector("#login-div");
var bodySelect = document.querySelector("body");

loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    var postObj = {
        username : inputs[0].value,
        password : inputs[1].value
    };
    loginUser(postObj);
})

function loginUser(postObj) {
    var xhr = new XMLHttpRequest();

    var sendJson = JSON.stringify(postObj);

    xhr.addEventListener("load", function() {
        resp = xhr.response;
        respOBJ = JSON.parse(resp);

        showProfile(respOBJ.token);
    });

    xhr.open("POST", "http://localhost:8080/auth/login");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(sendJson);
}

function showProfile(userToken) {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/user/" + inputs[0].value;
    xhr.open("GET", url);
    xhr.setRequestHeader('Authorization', 'Bearer '+ userToken);
    xhr.send();
    xhr.onload = function() {
        if(xhr.status == '200') {
            resp = xhr.response;
            respOBJ = JSON.parse(resp);
            displayDetails(respOBJ);
        }
        else alert("Check Your UserName And Password") 
    }
}

function displayDetails(respOBJ) {
    bodySelect.removeChild(loginDiv);

    console.log(respOBJ);

    for(key in respOBJ) {
        if(key != 'token') {
            var p = document.createElement("p");
            p.innerHTML = key + " : " + respOBJ[key];
            bodySelect.appendChild(p);
        }
    }
}