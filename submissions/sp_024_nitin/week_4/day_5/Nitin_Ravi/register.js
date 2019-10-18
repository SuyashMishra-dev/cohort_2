let buttons = document.querySelector('button');
let inputs = document.querySelectorAll('input');

function operation(datasendaction) {
    var xhr = new XMLHttpRequest();
    
    var newdata = JSON.stringify(datasendaction);
    xhr.addEventListener('load', function() {
        if(xhr.status <= 400) {
            printResponse(xhr.response);
        }
        else {
            console.log("Error Code is: " + xhr.status);
        }
    });

    xhr.addEventListener('error', function(event) {
        console.log('Error in HTTP request');
    });
    
    xhr.open('POST', 'http://localhost:8080/auth/register');
    xhr.setRequestHeader('Content-type', 'application/json; charset = utf-8');
    xhr.send(newdata);
}


function printResponse(input) {
    var body = document.querySelector('body');
    var para = document.createElement('p');
    para.textContent = input;
    body.appendChild(para);
}

buttons.addEventListener('click', function(event) {
    event.preventDefault();
    datasendaction = {
        name: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value,
        username: inputs[3].value,
        mobile: inputs[4].value,
        description: inputs[5].value
    };
    operation(datasendaction);
});
