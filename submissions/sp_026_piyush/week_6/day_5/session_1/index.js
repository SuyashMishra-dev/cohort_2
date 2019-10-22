var gitAPI = 'https://api.github.com/search/users?q=';

const fetchUsers = () => {
    var userName = document.getElementById('input').value;
    var result = document.getElementById('result');

    fetch(`${gitAPI}${userName}`)
        .then(response => response.json())
        .then((myJson) => {
            // console.log(JSON.stringify(myJson.items));
            var items = JSON.stringify(myJson.items);
            // console.log(items);
            result.innerHTML = myJson.items.map(element => {
                var imgUrl = element.avatar_url;
                return (
                    `<h1>${element.login}</h1>
                    <img src="${imgUrl}"/>
                    <div onclick="fetchRepos('${element.repos_url}')">${element.repos_url}</div>`
                );
            }).reduce((a,b) => a+b);;
        });
                
}

const fetchRepos = (url) => {
    fetch(url)
        .then(response => response.json())
        .then((myJson) => {
            // return console.log(myJson);

            result.innerHTML = myJson.map(element => {
                return (
                    `<h1>${element.name}</h1>`
                );
            }).reduce((a,b) => a+b);
        });
}


// then(res => {
//     // result.textContent = res.items.map(element => element.login);
//     console.log(res)
// });



// fetch(gitAPI)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     // console.log(JSON.stringify(myJson.items));
//     var items = JSON.stringify(myJson.items);
//     console.log(items);
//   });


// const promise = () => {
//     var x = document.getElementById('input').value;
//     var result = document.getElementById('result');

//     fetch(gitAPI+x)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(myJson) {
//             // console.log(JSON.stringify(myJson.items));
//             var items = JSON.stringify(myJson.items);
//             console.log(items);
//         });
// }