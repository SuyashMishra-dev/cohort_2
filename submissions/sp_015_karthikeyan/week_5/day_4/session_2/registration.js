$('button').click(function(event) {
    event.preventDefault();
    var data = {
        name: $('#name-input').val(),
        email: $('#email-input').val(),
        password: $('#password-input').val(),
        username: $('#username-input').val(),
        mobile: $('#mobile-input').val(),
        description: $('#description-input').val()
    }
    var json = JSON.stringify(data);
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/register",
        data: json,
        contentType : "application/json"
        
    })
    .done(function(resp) {
        console.log(resp);
    })
})