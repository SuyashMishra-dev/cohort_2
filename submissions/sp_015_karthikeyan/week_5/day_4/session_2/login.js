var respObj = [];
$('button').click(function(event) {
    event.preventDefault();
    var data = {
        password: $('#password-input').val(),
        username: $('#username-input').val()
    }
    var json = JSON.stringify(data);

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/login",
        data: json,
        contentType : "application/json"
    })
    .done(function(resp) {
        respObj = JSON.parse(resp);
        $.ajax({
            url: "http://localhost:8080/user/" + $('#username-input').val(),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer '+ respObj.token);
            }
        })
        .done(function(response) {
            console.log(response)
        })
    })
    
})