window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://hp-api.herokuapp.com/api/characters/staff');
    xhr.send();
    xhr.onload = function() {
        resp = xhr.response;
        staff_obj = JSON.parse(resp);
        console.log(staff_obj);
        create_staff_card(staff_obj);
    }
}

function create_staff_card(staff_obj){
    for(var i = 0; i < 8 ;i ++) {
        var card_div = document.createElement('div');
        card_div.setAttribute('class', 'card col-lg-4 align-middle');

        var img = document.createElement('img');
        img.setAttribute('class', 'card-img img-fluid');
        img.setAttribute('src', staff_obj[i].image);
        card_div.appendChild(img);

        var div = document.createElement('div');
        div.setAttribute('class', 'card-body');

        var h4 = document.createElement('h4');
        h4.setAttribute('class', 'card-title');
        h4.textContent = staff_obj[i].name;
        div.appendChild(h4);

        var p = document.createElement('p');
        p.setAttribute('class', 'card-text');
        p.textContent = staff_obj[i].actor;
        div.appendChild(p);

        card_div.append(div);
        $(".row").append(card_div);
    }

}