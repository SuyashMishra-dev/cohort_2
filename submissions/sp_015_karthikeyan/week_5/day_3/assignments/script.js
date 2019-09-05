window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://hp-api.herokuapp.com/api/characters");
    xhr.send();
    xhr.onload = function() {
        resp = xhr.response;
        respObj = JSON.parse(resp);
        createCharCard(respObj);
    }
}

function createCharCard(respObj) {
    for(i = 0; i < 18; i++) {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card col-lg-4 align-middle");

        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top img-fluid p-4");
        img.setAttribute("src", respObj[i].image);
        cardDiv.appendChild(img);

        var div = document.createElement("div");
        div.setAttribute("class", "card body");

        var h4 = document.createElement("h4");
        h4.setAttribute("class", "card-title");
        h4.textContent = respObj[i].name;
        div.appendChild(h4);

        var p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.textContent = respObj[i].house;
        div.appendChild(p);

        var p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.textContent = respObj[i].actor;
        div.appendChild(p);
        
        cardDiv.append(div);
        $('.row').append(cardDiv);
    }
}