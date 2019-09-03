var registerationBtn = document.querySelector("button");
var inputElements = document.querySelectorAll("input");
registerationBtn.addEventListener("click", function() {
    var objdata = {
        name : inputElements[0].value,
        email : inputElements[1].value,
        password : inputElements[2].value,
        username : inputElements[3].value,
        mobile : inputElements[4].value,
        description : inputElements[5].value
    };
    registerUser(objdata);
})
function registerUser(objdata) {
    var xhr = new XMLHttpRequest();

    var json = JSON.stringify(objdata);

    xhr.addEventListener("load", function() {
        if(xhr.status <= 400){
        printResponse(xhr.response)
        }
        else{
        alert("Error Code is:" + xhr.status);
        }
      });
    xhr.addEventListener('error', function(){
        alert('Error in HTTP request!')
    });

    xhr.open("POST", "http://localhost:8080/auth/register");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}
function printResponse(input){
        var body = document.querySelector('body');
        var outputPara = document.createElement('p');
        outputPara.textContent = input;
        body.append(outputPara);
      }