var registerButton = document.querySelector("button");
var inputs = document.querySelectorAll("input");

registerButton.addEventListener("click", function(event) {
    event.preventDefault();
    var postObject = {
        name : inputs[0].value,
        email : inputs[1].value,
        password : inputs[2].value,
        username : inputs[3].value,
        mobile : inputs[4].value,
        description : inputs[5].value
    };
    registerUser(postObject);
})



function registerUser(postObject) {
    var xhr = new XMLHttpRequest();

    var sendJson = JSON.stringify(postObject);

    xhr.addEventListener("load", function() {
        if(xhr.response == 401) {
            alert("An Error Has Occured")
        }
    })

    xhr.open("POST", "http://localhost:8080/auth/register");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(sendJson);
}