$('#btnOS').click(function(){
    var os = $('#selectOS').val();
    $.ajax({
        url: "http://localhost:8080/codenames/"+os,
    }).done(function(data){
        displayTable(JSON.parse(data).codenames);
    })
})


var displayTable = function(codenames) {
    $('#osTable').append("<tr><th>Version</th><th>Name</th></tr>");
    var osTable = document.getElementById('osTable');
    for(var i=0;i<codenames.length;i++){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = codenames[i].version;
        var td2 = document.createElement('td');
        td2.innerHTML = codenames[i].name;
        tr.appendChild(td1);
        tr.appendChild(td2);
        $('#osTable').append(tr);
        // osTable.appendChild(tr);
    } 
}