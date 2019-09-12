$("#submit").click(function(){
    var os = $("#osName").val();
    $.ajax({
        url: "http://localhost:8080/codenames/"+os,
     })
    .done(function(data){
        var apiData=JSON.parse(data);
        console.log(apiData);
        var table1= document.getElementById("table");
        for(var i=0;i<apiData.codenames.length;i++)
        {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = apiData.codenames[i].version;
        tr.appendChild(td1);
        var td2 = document.createElement('td');
        td2.innerHTML = apiData.codenames[i].name;
        tr.appendChild(td2);
        table1.appendChild(tr);
    } 

    })
});