$('#btnSubmit').click(function(){
    var inputUname = $('#inputUname').val();
    var inputPassword = $('#inputPassword').val();
    var inps = {
        password : inputPassword,
        username : inputUname
      }
    var json = JSON.stringify(inps);
    // console.log(json)
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/login",
        data: json,
        contentType : "application/json"
    }).done(function(data){
        data = JSON.parse(data);
        if (!data.error) {
            $.ajax({
                method: "GET",
                url : "http://localhost:8080/user"+inputUname,
                Authorization: "Bearer "+data.token
            }).done(function(data2){
                console.log(data);
            })
        }
    })
})