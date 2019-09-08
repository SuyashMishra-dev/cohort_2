$('.custom-select').change(function(element) {
    $.ajax({
        url: "http://localhost:8080/codenames/" + element.target.value 
    })
    .done(function(resp) {
        respOBJ = JSON.parse(resp); 
        $('.table').remove();
        $('.container').append('<table class="table"></table>');
        for(var i = 0; i < respOBJ.codenames.length; i++) {
            $('.table').append('<tr><td>' + respOBJ.codenames[i]['version'] + '</td><td>' + respOBJ.codenames[i]['name'] + '</td></tr>');
        }
    })
})
