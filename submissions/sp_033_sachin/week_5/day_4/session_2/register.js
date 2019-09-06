$('#btnSubmit').click(function(event){
    event.preventDefault();
    var formInputs = new FormInputs($('#inputName').val(),$('#inputEmail').val(),$('#inputPassword').val(),$('#inputUname').val(),$('#inputMobile').val(),$('#inputDescription').val());
    var json = JSON.stringify(formInputs);
    // console.log(formInputs);
    $.ajax({
        method:"POST",
        url : "http://localhost:8080/auth/register",
        data: json,
        contentType : "application/json"                
    })
    .done(function(data){
        console.log(data)
    })
})


var FormInputs = function(name,email,password,username,mobile,description){
    this.name = name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.mobile = mobile;
    this.description = description;
}