var osSelect = document.getElementById('osSelect');
var osArr = [];

osSelect.addEventListener('change',function(){
    selectRequest(osSelect.value);    
});

var selectRequest = function(option) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8080/codenames/'+option);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status ==200) {         
            if (osArr.filter(item=>item.os==option).length > 0) {
                let data = osArr.filter(item=>item.os==option);                
                displayResponse[data[0]];
            }else {
                osArr.push(JSON.parse(xhr.response));
                displayResponse(JSON.parse(xhr.response));
            } 

        } else {
            console.log('Error code is:' + xhr.status )
        }

    }
}

var displayResponse = function (data) {
    var bodyEl = document.querySelector('body');
    var table = document.createElement('table');
    var trh = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.innerHTML = 'Name';
    var th2 = document.createElement('th');
    th2.innerHTML = 'Version';
    trh.appendChild(th1);
    trh.appendChild(th2);    
    table.appendChild(trh);
    
    for(let i= 0;i<data.codenames.length;i++){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = data.codenames[i].version;
        let td2 = document.createElement('td');
        td2.innerHTML = data.codenames[i].name;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }

    bodyEl.insertBefore(table,osSelect);
}