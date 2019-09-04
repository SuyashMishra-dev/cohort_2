var selector = document.querySelector("select");
var table = document.querySelector("table");

selector.addEventListener("change", function(element) {
    getOS(element.target.value);
})

function getOS(req) {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/codenames/" + req; 
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        resp = JSON.parse(xhr.response);
        displayTable(resp);
    }
}

function displayTable(input) {
    clearTable();

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = "Name";
    tr.appendChild(td);
    table.appendChild(tr);

    var td = document.createElement("td");
    td.innerHTML = "Version";
    tr.appendChild(td);
    table.appendChild(tr);


    for(i = 0; i < input.codenames.length; i++) {
        var tr = document.createElement("tr");
        
        var td = document.createElement("td");
        td.innerHTML = input.codenames[i].name;
        tr.appendChild(td);

        var td = document.createElement("td");
        td.innerHTML = input.codenames[i].version;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    
}

function clearTable() {
    var tableChilds = document.querySelectorAll("table tr");
    for(i = 0; i < tableChilds.length; i++) {
        table.removeChild(tableChilds[i]);
    }
}