const searchName = () => {
    let nameInput  = document.getElementById('nameInput').value;
    let resp = fetch('https://api.github.com/search/users?q='+nameInput)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        displayDetails(myJson);
    });
    // console.log(resp)

}


const displayDetails =(myJson)=>{
    let displayContainer = document.getElementById('displayContainer');
    myJson.items.forEach(element => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src',element.avatar_url);
        let h3 = document.createElement('h3');
        h3.textContent = element.login;
        div.appendChild(img);
        div.appendChild(h3);
        displayContainer.appendChild(div);
    });
}