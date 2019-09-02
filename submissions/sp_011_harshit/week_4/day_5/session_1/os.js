var submit = document.getElementById('submit')
var value1 = document.getElementById('oss').value;
submit.addEventListener('click', function () {
    getandro(value1, printdata)

});


function getandro(value1, callback) 
{
    var finalresult = null;
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8080/codenames/' + value1);
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            finalresult = xhr.response;

            callback(finalresult)
        }
        else 
        {
            console.log("error is:" + xhr.status)
        }
    }
}


function printdata(valuee)
 {
    var dsplele = document.createElement('p')
    var table = document.getElementById('tbl1')
    table.setAttribute('id', 'blk')
    if (valuee == null) 
    {
        dsplele.textContent = "error no data"
    }
    else 
    {
        var obj = JSON.parse(valuee)
        console.log(obj)

        for (var a = 0; a < obj.codenames.length; a++) {
            var tr = document.createElement('tr')
            var tdata = document.createElement('td')
            var tdata2 = document.createElement('td')
            tdata.textContent = obj.codenames[a].name
            tdata2.textContent = obj.codenames[a].version

            tr.appendChild(tdata)
            tr.appendChild(tdata2)

            console.log(obj.codenames[a].name)
            table.appendChild(tr)
        }

    }
}
