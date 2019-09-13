const url = 'https://api.github.com/search/users?q=';

const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const table = document.getElementById("result-table");

const search = () => {
    fetch(url + input.value)
        .then(resp => resp.json())
        .then(resp => populateTable(resp));
        
}


const populateTable = (response) => {
    table.innerHTML = "";
    input.value = "";
    let thead = document.createElement("thead");
    thead.innerHTML = `<tr><th>Avatar</th><th>User Name</th><th>Score</th><th>Link</th></tr>`;
    table.appendChild(thead);
    response.items.forEach(ele => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td><img src="${ele.avatar_url}" class="img-thumbnail img-responsive w-25 h-25"></td> <td class="align-middle">${ele.login}</td> <td class="align-middle">${ele.score}</td> <td class="align-middle"><a href="${ele.html_url}">View On Github</a></td>`
        table.appendChild(tr);
    })
}

searchButton.addEventListener("click", search);
