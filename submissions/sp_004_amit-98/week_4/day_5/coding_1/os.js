function ubuntuOs() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/codenames/ubuntu');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            var output = JSON.parse(xhr.response);
            console.log(output);
            console.log(output.codenames.length);
        }
        else {
            console.log("Error Code is :" + xhr.status);
        }
        var ubuntuTable = document.getElementById("ubuntuTable");
        var thead = document.createElement('tr');
        var head = ['Name', 'Version'];
        for (var i = 0; i < head.length; i++) {
            var td = document.createElement('td');
            td.innerHTML = '<b>' + head[i] + '</b>';
            thead.appendChild(td);
        }
        ubuntuTable.appendChild(thead);
        for (i = 0; i < output.codenames.length; i++) {
            var tr = document.createElement('tr');
            var tname = document.createElement('td');
            tname.textContent = output.codenames[i].name;
            tr.appendChild(tname);
            var tversion = document.createElement('td');
            tversion.textContent = output.codenames[i].version;
            tr.appendChild(tversion);
            ubuntuTable.appendChild(tr);
        }

    }
}
function androidOs() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/codenames/android');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            var output = JSON.parse(xhr.response);
            console.log(output);
        }
        else {
            console.log("Error Code is :" + xhr.status);
        }
        var ubuntuTable = document.getElementById("androidTable");
        var thead = document.createElement('tr');
        var head = ['Name', 'Version'];
        for (var i = 0; i < head.length; i++) {
            var td = document.createElement('td');
            td.innerHTML = '<b>' + head[i] + '</b>';
            thead.appendChild(td);
        }
        ubuntuTable.appendChild(thead);
        for (i = 0; i < output.codenames.length; i++) {
            var tr = document.createElement('tr');
            var tname = document.createElement('td');
            tname.textContent = output.codenames[i].name;
            tr.appendChild(tname);
            var tversion = document.createElement('td');
            tversion.textContent = output.codenames[i].version;
            tr.appendChild(tversion);
            ubuntuTable.appendChild(tr);
        }
    }
}
function windowsOs() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/codenames/windows');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            var output = JSON.parse(xhr.response);
            console.log(output);
        }
        else {
            console.log("Error Code is :" + xhr.status);
        }
        var ubuntuTable = document.getElementById("windowsTable");
        var thead = document.createElement('tr');
        var head = ['Name', 'Version'];
        for (var i = 0; i < head.length; i++) {
            var td = document.createElement('td');
            td.innerHTML = '<b>' + head[i] + '</b>';
            thead.appendChild(td);
        }
        ubuntuTable.appendChild(thead);
        for (i = 0; i < output.codenames.length; i++) {
            var tr = document.createElement('tr');
            var tname = document.createElement('td');
            tname.textContent = output.codenames[i].name;
            tr.appendChild(tname);
            var tversion = document.createElement('td');
            tversion.textContent = output.codenames[i].version;
            tr.appendChild(tversion);
            ubuntuTable.appendChild(tr);
        }
    }
}
function macOs() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/codenames/macos');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            var output = JSON.parse(xhr.response);
            console.log(output);
        }
        else {
            console.log("Error Code is :" + xhr.status);
        }
        var ubuntuTable = document.getElementById("macosTable");
        var thead = document.createElement('tr');
        var head = ['Name', 'Version'];
        for (var i = 0; i < head.length; i++) {
            var td = document.createElement('td');
            td.innerHTML = '<b>' + head[i] + '</b>';
            thead.appendChild(td);
        }
        ubuntuTable.appendChild(thead);
        for (i = 0; i < output.codenames.length; i++) {
            var tr = document.createElement('tr');
            var tname = document.createElement('td');
            tname.textContent = output.codenames[i].name;
            tr.appendChild(tname);
            var tversion = document.createElement('td');
            tversion.textContent = output.codenames[i].version;
            tr.appendChild(tversion);
            ubuntuTable.appendChild(tr);
        }
    }
}