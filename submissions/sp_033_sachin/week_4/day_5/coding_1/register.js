var form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var inputEls = document.querySelectorAll('input');
    var descriptionInput = document.getElementById('descriptionInput');
    var userData = {
        name:inputEls[0].value,
        email:inputEls[1].value,
        password:inputEls[2].value,
        username:inputEls[3].value,
        mobile:inputEls[4].value,
        description:descriptionInput.value,
    }
    for(var i=0; i<inputEls.length; i++) {
        if (inputEls[i].value == '') {
            alert('Enter all Input fields');
            return false;
        }
    }
    if (descriptionInput.value == '') {
        alert('Enter Description');
        return false;
    }
    postData(userData);
});

var postData = function(data){
    var xhr = new XMLHttpRequest;
    var jsonData = JSON.stringify(data);

    xhr.addEventListener('load',function(){
        if (xhr.status <= 400) {
            displayResponse(xhr.response);
        } else {
            console.log('Error Code is'+xhr.status);
            displayResponse('erro');
        }
    });

    xhr.addEventListener('error',function(event){
        console.log('error in http req');
    });

    xhr.open('POST','http://localhost:8080/auth/register');
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(jsonData);
}

var displayResponse = function (resData){
    var bodyEl = document.querySelector('body');
    bodyEl.append(resData);
}