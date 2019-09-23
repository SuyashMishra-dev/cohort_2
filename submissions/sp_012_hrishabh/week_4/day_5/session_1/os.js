    
    
    function callApi () {
        var getSelect = document.getElementById('getData').value;
        
        var xhr = new XMLHttpRequest();
        var call = 'http://localhost:8080/codenames/' + getSelect;
        xhr.open('GET' , call);    
       
        xhr.send()
        console.log(xhr);
        xhr.onload = function () {
            if(xhr.status == 200) {
                showInTable(JSON.parse(xhr.response));
            }
        
             
            
        }
    }

    function showInTable (input) {
        var tableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var tableParent = document.querySelector('table');
        tableData.innerHTML = 'Name';        
        tableRow.appendChild(tableData);
        tableParent.appendChild(tableRow);


        var tableData = document.createElement('td');
        tableData.innerHTML = 'version';
        tableRow.appendChild(tableData);
        tableParent.appendChild(tableRow);

        for(var i = 0; i < input.codenames.length; i++) {
            var tableRow = document.createElement('tr');
            var tableData = document.createElement('td');
            var tableParent = document.querySelector('table');
            tableData.innerHTML = input.codenames[i].name;
            tableRow.appendChild(tableData);

            var tableData = document.createElement('td');
            var tableParent = document.querySelector('table');
            tableData.innerHTML = input.codenames[i].version;
            tableRow.appendChild(tableData);
            tableParent.appendChild(tableRow);
        }
    }
    
