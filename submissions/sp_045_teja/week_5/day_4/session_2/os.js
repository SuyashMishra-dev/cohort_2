$("#operasystem").change(function(element) {
    $.ajax({
        url: "http://localhost:8080/codenames/" + element.target.value
    })
    .done(function(data){
        result = data;
        resobject = JSON.parse(result);
        
        $(".table").remove();
        $(".container").append("<table class='table table-striped'></table>");
        for (var i = 0; i < resobject.codenames.length; i++) {
            $(".table").append("<tr><td>"+resobject.codenames[i]["version"]+"</td><td>"+resobject.codenames[i]["name"]+"</td></tr>");        
        }
    });
});