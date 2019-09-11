function getUserData(){
  var output = document.getElementById("selectId").value;
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/codenames/"+output;
    xhr.open('GET',url);
    xhr.send();
    xhr.onload = function(){
        if(xhr.status == 200){
         var objSelect =JSON.parse(xhr.response);
         console.log(objSelect);
        }
        else{
            console.log("Error Code is:" + xhr.status);
        }
   

var print= document.getElementById("tableOutput");
for(i =0 ;i<objSelect.codenames.length; i++){
    var tr_id = document.createElement('tr');
    var td_id1 = document.createElement('td');
    td_id1.textContent= objSelect.codenames[i].name;
    tr_id.appendChild(td_id1);
    var td_id2 = document.createElement('td');
    td_id2.textContent= objSelect.codenames[i].version;
    tr_id.appendChild(td_id2);
   print.appendChild(tr_id);
}
}
}
