var btn = document.querySelector('button');
var inputs = document.querySelectorAll('input');
var body = document.querySelector('body');

function authentication(loginAction) {
    var xhr = new XMLHttpRequest();
    
    var idSend = JSON.stringify(loginAction);
    xhr.addEventListener('load', function() {
        sendResponse = xhr.response;
        getResponse = JSON.parse(sendResponse);

        var xhr = new XMLHttpRequest();
        var url = 'http://localhost:8080/auth/' + inputs[0].value;
        xhr.open('POST', url);
        xhr.setRequestHeader('Authorization', 'Bearer ' + getResponse.token);
        xhr.send();
        xhr.onload = function() {
            if(xhr.status == 200) {
                result = xhr.response;
                getResult = JSON.parse(result);
                
                for (key in getResult) {
                    if(key != 'token') {
                        printResult(getResult.token);
                    }
                }
            }
            else {
                console.log('Invalid Username and Password');
            }
        }   
    
    });
    
    xhr.open('POST', 'http://localhost:8080/auth/login');
    xhr.setRequestHeader('Content-type', 'application/json; charset = utf-8');
    xhr.send(idSend);

    function printResult(input) {
        body.removeChild('formpass');
        var para = document.createElement('p');
        para.innerHTML = key + ':' + getResutl[key];
        body.appendChild(para);
    }

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        loginAction = {
            username: inputs[0].value,
            password: inputs[1].value,
        };
        authentication(loginAction);
    });
}            