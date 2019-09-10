$("#button").click(function() {
    var object = {
        name : $("#name").val(),
        email :  $("#email").val(),
        password:  $("#password").val(),
        username:  $("#username").val(),
        mobile:  $("#mobile").val(),
        description:  $("#description").val()
    }
    
    data = JSON.stringify(object)

    $.ajax({
        method: "POST",
        data: data,
        url: "http://localhost:8080/auth/register",
        contentType : "application/json"
    })
    .done(function(resp) {
        console.log(resp)
    });
    
});

