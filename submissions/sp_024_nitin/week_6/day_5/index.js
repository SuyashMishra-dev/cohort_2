var searchUrl = 'https://api.github.com/search/users?q=';

var buttons = document.querySelector('button');
var inputs = document.querySelector('input');
var tables = document.querySelector('table');

let i = 0;
let response;
let storage = window.localStorage;
let arr = [];


let content = storage.getItem('Details');

//console.log(typeof(content));

const searchUser = () => {
    // console.log(searchUrl + inputs.value)
    var val = searchUrl + inputs.value;
    //console.log(val);
    fetch(val)
        .then(res => res.json())
        .then(res => {
            response = res;
            console.log(response);
            fillTable(response);
        }); 
    }

const save = (details) => {
    // console.log(response.items[details]);
    arr.push(JSON.stringify(response.items[details]));
    storage.setItem('details', arr);
}

const fillTable = (response) => {
    tables.innerHTML = '';
    inputs.value = '';
    
    response.items.forEach(element => {
        let th1 = document.createElement('th');
            th1.innerHTML = `<tr> <th >Avatar</th> <th >Username</th> <th>Score</th> 
                <th>Link</th> <th>Action</th> </tr>`
            tables.appendChild(th1);
        let tr1 = document.createElement('tr');
            tr1.innerHTML = `<td><img src = '${element.avatar_url}' class = "img-thumbnail img-responsive w-20 h-20"></td> <td class = "align-middle">${element.login}</td>
                <td class = align-middle>${element.score}"</td> <td class = align-middle><a ref = "${element.html_url}">View GitHub Profile</a></td>
                <td class = "align-middle"><button class = "btn btn-danger btn-lg" onclick = 'save(${i})'>Button</button></td>`;
            tables.appendChild(tr1);
            i++;
        });
    i = 0;
}

buttons.addEventListener("click", function(event) {
    event.preventDefault();
    searchUser();
});