window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc');
    xhr.send()
    xhr.onload = function() {
        if (xhr.status == 200) {
            var characters_object = JSON.parse(xhr.response);
            console.log(characters_object);
        } else {
            console.log(xhr.status);
        }



        // characters_object.items.forEach(function(element) {
        //     $("#display").append("<div class='col-4 float-left text-center mb-5 mt-5'>" + "<div class='card bg-color text-dark font-weight-bolder'>" +
        //         "<div class='card-body'>" + "<img class = 'card-img-top img' src =" + element.image + ">" + "<h5 class='card-title'>" + "<b>" + element.name + "</b>" +
        //         "</h5>" + "<p class='card-text'>Species: " + element.name + "</p>" +
        //         "<p class='card-text'>Gender: " + element.gender + "</p>" +
        //         "<p class = 'card-text'>House:" + element.house + "</p>" +
        //         "<p>Birth Year:" + element.dateOfBirth + "</p>" + "</div>" + "</div>" + "</div>");
        // });

        characters_object.items.forEach(function(element) {
            $("#display").append("<table class = 'table table-bordered'>" +
                "<thead>" +
                "<tr>" +
                "<th scope = 'col'> Name" + "</th>" +
                "<th scope = 'col'> Full Name" + "</th>" +
                "<th scope = 'col'> Id" + "</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>" +
                "<tr>" +
                "<td>" + element.name + "</td>" +
                "<td>" + element.full_name + "</td>" +
                "<td>" + element.id + "</td>" +
                "</tr>" +
                "</tbody>" +
                "</table>")

        })
    }
}