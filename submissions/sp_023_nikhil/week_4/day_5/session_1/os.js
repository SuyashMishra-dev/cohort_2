var button = document.getElementById('submit')
button.addEventListener('click', function() {

    var display = call(nextFunc)

});



function call(callBack) {
    var value = document.querySelector('#select').value

    var xhr =  new XMLHttpRequest();

    xhr.open ('GET', 'http://localhost:8080/codenames/' + value)

    xhr.send()

    xhr.onload = function() {
        if(xhr.status == 200) {
            var obj = JSON.parse(xhr.response)
            return callBack(obj)
        }
        else{
            console.log("Error is:" + xhr.status)
        }
    }
}

var nextFunc = function (objValue) {
    var print  = console.log(objValue)
    return print
}
