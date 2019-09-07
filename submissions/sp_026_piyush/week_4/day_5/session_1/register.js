function sendData(postObject) {
    var xhr = new XMLHttpRequest();

    var json = JSON.stringify(postObject);

    xhr.addEventListener('load', function () {
        if(xhr.status <= 400){
            printResponse(xhr.response)
        }
        else {
            console.log("Error Code is:" + xhr.status);
        }
    });

    xhr.addEventListener('error', function(event){
        console.log('Error in HTTP request!')
    });

    xhr.open("POST", 'http://localhost:8080/auth/register' );
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}

function printResponse(input) {
    var body = document.querySelector('body');
    var outputPara = document.createElement('p');
    outputPara.textContent = input;
    body.append(outputPara);
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
        } else {
            var postObject = {
                name : inputElements[0].value,
                email : inputElements[1].value,
                password : inputElements[2].value,
                username : inputElements[3].value,
                mobile : inputElements[4].value,
                description : inputElements[5].value
            }
            sendData(postObject);
            break;
        }
    }
});