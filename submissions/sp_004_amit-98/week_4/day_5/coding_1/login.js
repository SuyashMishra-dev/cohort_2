var loginBtn = document.querySelector("button");
var inputsElement = document.querySelectorAll("input");

loginBtn.addEventListener("click", function (event) {
    var postUserObj = {
        username: inputsElement[0].value,
        password: inputsElement[1].value
    };
    loginUser(postUserObj);
})

function loginUser(postUserObj) {
    var xhr = new XMLHttpRequest();

    var json = JSON.stringify(postUserObj);

    xhr.addEventListener("load", function () {
        resp = xhr.response;
        respOBJ = JSON.parse(resp);

        showUserProfile(respOBJ.token);
    });

    xhr.open("POST", "http://localhost:8080/auth/login");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}

function showUserProfile(userTokenData) {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/user/" + inputsElement[0].value;
    xhr.open("GET", url);
    xhr.setRequestHeader('Authorization', 'Bearer ' + userTokenData);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == '200') {
            res = xhr.response;
            resObj = JSON.parse(res);
            displayDetails(resObj);
        }
        else alert("The username or password was incorrect, please try again!")
    }
}
var loginUserData = document.querySelector("#loginForm");
var bodyElem = document.querySelector("body");
function displayDetails(resObj) {
    bodyElem.removeChild(loginUserData);
    for (key in resObj) {
        if (key != 'token') {
            var p = document.createElement("p");
            p.textContent = key + " : " + resObj[key];
            bodyElem.appendChild(p);
        }
    }
} 