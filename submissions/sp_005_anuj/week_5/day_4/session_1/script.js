
        $(document).ready(function () {
            $("#secondBox").hide();
            $("h3").hide();
            $("input").hide();
            $("button").hide();
            $("#name").show();
            $("#dName").show();
        });
        
        $('#dName').keyup(function() {
           var name = $(this).val();
           if (name.length > 10 || name.length < 3) {
                $("#nameError").text("Enter a valid name");
                $("#dEmail").hide();
                $("#email").hide();
            } else {
                $("#nameError").hide()
                $("#dEmail").show();
                $("#email").show();
                $("#newName").text(name);
            }
        });

        $('#dEmail').keyup(function() {
            var email = $(this).val();
            var vaildFormat = false;
            var i = 0;
            var j = 0; 
            validDot = false; 
            validAt = false; 

            for (i = 0; i < email.length; i++) {
                if (email[0] != '.' && email[email.length-1] != '.') {
                    if (email[i] == '.') {
                        if (email[i+1] != '' && email[i+1] != ' ' && email[i+1] != '@' && email[i-1] != '@' && email[i-1] != ' ') {
                            validDot = true;
                        }
                    }
                } 
                
                if (email[0] != '@' && email[email.length-1] != '@' && email[email.length-2] != '@' && email[i+1] != '.' && email[i-1] != '.' && email[i-1] != '' && email[i-1] != ' ' && email[i+1] != ' ') {
                    if (email[i] == '@' && email[i-1] != ' ') {
                        for (j = i; j < email.length; j++) {
                            if (email[j+1] == '.') {
                                validAt = true;
                            }
                        }				
                    }
                }
            }

            if(validDot != true || validAt != true) {
                $("#emailError").text("Enter a valid email");
                $("#dMobile").hide();
                $("#mobile").hide();
            } else {
                $("#emailError").hide();
                $("#dMobile").show();
                $("#mobile").show();
                $("#newEmail").text(email);
            }
        });

        $('#dMobile').keyup(function() {
            var mobile = $(this).val();
            if (mobile.length != 10) {
                $("#mobileError").text('Enter a valid mobile');
                $("#btnRegister").hide();
            } else {
                $("#mobileError").hide();
                $("#btnRegister").show();  
                $("#newMobile").text(mobile);              
            }
        });

        $("#btnRegister").click(function () {
            $("#firstBox").hide();
            $("#secondBox").show();             
            $(".b2Elems").show(); 
        });