const mainUrl = 'https://api.github.com/search/users?q=';
const userUrl = 'https://api.github.com/users/'

const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const table = document.getElementById("result-table");

let i = 0; 
let response;
//LocalStorage Implementation
let storage = window.localStorage;
let localArr = [];

let content = storage.getItem("Details");
console.log(typeof(content));
if(content != null) {
    let contentObj = JSON.parse(content);
    contentObj.forEach((ele) => {
        localArr.push(ele);
    })
    populateSavedTable(localArr);
}

const search = () => {
    fetch(mainUrl + input.value)
        .then(resp => resp.json())
        .then(resp => {
            response = resp;
            populateTable(response)
        });      
}

const save = (que) => {
    console.log(response.items[que]);
    localArr.push(JSON.stringify(response.items[que]));
    storage.setItem("Details", localArr);
}

const populateTable = (response) => {
    table.innerHTML = "";
    input.value = "";
    let thead = document.createElement("thead");
    thead.innerHTML = `<tr><th class="align-middle">Avatar</th> <th class="align-middle">User Name</th> <th class="align-middle">Score</th> <th class="align-middle">Link</th> <th class="align-middle">Action</th></tr>`;
    table.appendChild(thead);
    response.items.slice(0,9).forEach(ele => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td><img src="${ele.avatar_url}" class="img-thumbnail img-responsive w-25 h-25"></td> <td class="align-middle">${ele.login}</td> <td class="align-middle">${ele.score}</td> <td class="align-middle"><a href="${ele.html_url}">View On Github</a></td> <td class="align-middle"><button class="btn btn-success" onclick="save(${i})">Save</button></td>`
        table.appendChild(tr);
        i++;
    })
    i = 0;
} 

searchButton.addEventListener("click", search);
