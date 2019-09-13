const mainUrl = 'https://api.github.com/search/users?q=';
const userUrl = 'https://api.github.com/users/'

const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const table = document.getElementById("result-table");

let i = 0; 
var reposArr = [];

const search = () => {
    fetch(mainUrl + input.value)
        .then(resp => resp.json())
        .then(resp => repoSearch(resp));      
}

const repoSearch = (mainResp) => {
    
    mainResp.items.forEach(ele => {
        fetch(ele.repos_url)
            .then(reposResp => reposResp.json())
            .then(reposResp => reposArr.push(Number(reposResp.length)));
    })
    populateTable(mainResp, reposArr);
}

const populateTable = (response, reposArr) => {
    table.innerHTML = "";
    input.value = "";
    let thead = document.createElement("thead");
    thead.innerHTML = `<tr><th class="align-middle">Avatar</th> <th class="align-middle">User Name</th> <th class="align-middle">Score</th> <th class="align-middle">Total Repositories</th> <th class="align-middle">Link</th></tr>`;
    table.appendChild(thead);
    response.items.forEach(ele => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td><img src="${ele.avatar_url}" class="img-thumbnail img-responsive w-25 h-25"></td> <td class="align-middle">${ele.login}</td> <td class="align-middle">${ele.score}</td> <td class="align-middle">` + reposArr[i] + `<td class="align-middle"><a href="${ele.html_url}">View On Github</a></td>`
        table.appendChild(tr);
        i++;
    })
    i = 0;
} 

searchButton.addEventListener("click", search);
