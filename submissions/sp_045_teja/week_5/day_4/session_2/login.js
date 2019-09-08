$("#button").click(function() {
    var object = {
        password : $("#password").val(),
        username : $("#username").val()
    }

    data = JSON.stringify(object);

    $.ajax({
        method : "POST",
        data: data,
        url: "http://localhost:8080/auth/login",
        contentType : "application/json"
    })
    .done(function(resp) {
    data1 = JSON.parse(resp)
    $.ajax({
        url:"http://localhost:8080/user/" + $("#username").val(),
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + data1.token)
        }
    })
    .done(function(finalresp) {
        console.log(finalresp);
    });
    })
    

});