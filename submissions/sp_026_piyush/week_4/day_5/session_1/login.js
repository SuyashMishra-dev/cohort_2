function sendData(postObject) {
    var xhr = new XMLHttpRequest();

    var json = JSON.stringify(postObject);

    xhr.addEventListener('load', function () {
            var responseObject = JSON.parse(xhr.response);
            getUserData(responseObject.token, postObject);
    });

    xhr.addEventListener('error', function(event){
        console.log('Error in HTTP request!');
        alert('The username or password was incorrect, please try again!');
    });

    xhr.open("POST", 'http://localhost:8080/auth/login' );
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}

function getUserData(receivedToken, postObject) {
    var xhr = new XMLHttpRequest();
    var inputElements = document.querySelectorAll('.formEle');
    // var url = 'http://localhost:8080/user/' + inputElements[0].value;
    var url = 'http://localhost:8080/user/' + postObject.username;
    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', 'Bearer ' + receivedToken);
    // xhr.setRequestHeader('Authorization: Bearer ' + receivedToken);
    // Above line was not working
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            result = xhr.response;
            resultObject = JSON.parse(result);
            printResponse(resultObject);
        }
        else {
            alert('The username or password was incorrect, please try again!');
        }
    }
}

function printResponse(resultObject) {
    var body = document.querySelector('body');
    body.removeChild(form);

    for (key in resultObject) {
        var h3 = document.createElement('h3');
        h3.textContent = key + ' : ' + resultObject[key];
        body.appendChild(h3);
    }
}

var form = document.querySelector('#sendForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputElements = document.querySelectorAll('.formEle');
    
    for (i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value == '') {
            var elemBody = document.querySelector('body');
            var errorDiv = document.createElement('div');
            elemBody.appendChild(errorDiv);
            errorDiv.innerHTML = 'Please enter the ' + inputElements[i].name;
            break;
        } else {
            var postObject = {
                username : inputElements[0].value,
                password : inputElements[1].value
            }
            sendData(postObject);
            break;
        }
    }
});