var apiDataC = new XMLHttpRequest();
apiDataC.open('GET', 'http://hp-api.herokuapp.com/api/characters/');
apiDataC.send();
apiDataC.onload = function () {
    var ObjectCharacter = JSON.parse(apiDataC.response);


    ObjectCharacter.forEach(function (element) {
        $("#allCharacters").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img class='card-img-top' style='height:500px' src=" + element.image + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + element.name + "</b>" +
            "</h5>" + "<p class='card-text'>Gender: " + element.gender + "</p>" +
            "<p class='card-text'>House: " + element.house + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}

var apiDataB = new XMLHttpRequest();
apiDataB.open('GET', 'http://hp-api.herokuapp.com/api/characters/students');
apiDataB.send();
apiDataB.onload = function () {
    var ObjectStudent = JSON.parse(apiDataB.response);


    ObjectStudent.forEach(function (element) {
        $("#allstudents").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img class='card-img-top' style='height:500px' src=" + element.image + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + element.name + "</b>" +
            "</h5>" + "<p class='card-text'>Gender: " + element.gender + "</p>" +
            "<p class='card-text'>House: " + element.house + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}

var apiDataA = new XMLHttpRequest();
apiDataA.open('GET', 'http://hp-api.herokuapp.com/api/characters/staff');
apiDataA.send();
apiDataA.onload = function () {
    var ObjectStaff = JSON.parse(apiDataA.response);


    ObjectStaff.forEach(function (element) {
        $("#allstaffs").append("<div class='col-3 text-center mb-5'>" + "<div class='card'>" +
            "<img class='card-img-top' style='height:500px' src=" + element.image + ">" +
            "<div class='card-body'>" + "<h5 class='card-title'>" + "<b>" + element.name + "</b>" +
            "</h5>" + "<p class='card-text'>Gender: " + element.gender + "</p>" +
            "<p class='card-text'>House: " + element.house + "</p>" +
            "</div>" + "</div>" + "</div>");
    });
}