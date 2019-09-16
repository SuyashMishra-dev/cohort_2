var logUser = document.querySelector('button');
var getData = document.querySelectorAll('input');


logUser.addEventListener('click' , function (event) {
    event.preventDefault();
    sendCredential = {
        username : getData[0].value,
        password : getData[1].value,
    };
    loginAuth(sendCredential);
})

function logAuth () {
    var xhr = new XMLHttpRequest();
    var getString = JSON.stringify(sendCredential);
    xhr.addEventListener('load' , function () {
        sendRespose = xhr.response;
        getResponse = JSON.parse(sendResponse);
        
        
            var xhr = new XMLHttpRequest();
            var url = "http://localhost:8080/user/" + inputs[0].value;
            xhr.open("GET", url);
            xhr.setRequestHeader('Authorization', 'Bearer '+ getResponse.token);
            xhr.send();
            xhr.onload = function() {
                if(xhr.status == '200') {
                    tokenResponse = xhr.response;
                    tokenResponseObj = JSON.parse(tokenResponse);
                    var form = document.getElementById('body');
                    form.removeChild('form');

                    for(key in tokenResponseObj) {
                        if(key != 'token')
                        var showUser = document.createElement('h1');
                        showUser.innerHTML = key + " : " + tokenResponseObj[key];
                        form.appendChild(showUser)
                    }
                    
                }
                   
        
                else {
                    alert("Check Your UserName And Password")
                } 
    }

        
    })
    xhr.open("POST", "http://localhost:8080/auth/login");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(getString);
}