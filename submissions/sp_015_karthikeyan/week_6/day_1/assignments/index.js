let moviesArr = [];
let actorsArr = [];
let tempArr = [];

class Movie {
    constructor(movieName, directors, year, rating, writers) {
        this.movieName = movieName;
        this.directors = directors;
        this.year = year;
        this.rating = rating;
        this.writers = writers;
    }

    printMovie() {
        return `Name: ${this.movieName}
        Directors: ${this.directors.reduce((a,b) => a + ", " + b)}
        Year: ${this.year}
        Rating: ${this.rating}
        Writers: ${this.writers.reduce((a,b) => a + ", " + b)}`
    }
}

class Actor extends Movie {
    constructor(actorName, age, dob, movie) {
        super();
        this.name = actorName;
        this.age = age;
        this.dob = dob;
        this.movie = movie;
    }
    checkMovies(arr) {
        tempArr = [];
        tempArr = arr.filter(movie => movie.movieName == this.movie);
        if(tempArr.length > 0) {
            return true;
        }
        else false;
    }
    addMovies(movieName, directors, year, rating, writers) {
        this.movieName = movieName;
        this.directors = directors;
        this.year = year;
        this.rating = rating;
        this.writers = writers;
    }
    printActorDetails() {
        return `Name: ${this.name} \nAge: ${this.age} \nDOB: ${this.dob} \nMovie: ${this.movie}`;
    }
}

function printAllActors(event) {
    event.preventDefault();
    for(let i = 0; i < actorsArr.length; i++) {
        let p = document.createElement("p");
        p.innerHTML = actorsArr[i].printActorDetails();
        div.appendChild(p);
    }
}

function printActorMovies(event) {
    event.preventDefault();
    div.innerHTML = "";
    for(let i = 0; i < actorsArr.length; i++) {
        if(actorsArr[i].name == inputs[9].value) {
            let p = document.createElement("p");
            p.textContent = actorsArr[i].printActorDetails();
            div.appendChild(p);
        }
    }
}

const submitButtonOne = document.getElementById("submit-button-1");
const submitButtonTwo = document.getElementById("submit-button-2");
const submitButtonThree = document.getElementById("submit-button-3");
const submitButtonFour = document.getElementById("submit-button-4");
const listAllMoviesButton = document.getElementById("list-all-movies-button");
const inputs = document.querySelectorAll("input");
const div = document.querySelector("#list-all");

submitButtonOne.addEventListener("click", function(event) {
    event.preventDefault();
    let newMovie = new Movie(inputs[0].value, inputs[1].value.split(","), inputs[2].value, inputs[3].value, inputs[4].value.split(","));
    moviesArr.push(newMovie);
})

listAllMoviesButton.addEventListener("click", function(event) {
    event.preventDefault();
    div.innerHTML = '';
    for(i = 0; i < moviesArr.length; i++) {
        let p = document.createElement("p");
        p.innerHTML = moviesArr[i].printMovie();
        div.appendChild(p);
    }
})

submitButtonTwo.addEventListener("click", function(event) {
    event.preventDefault();
    let newActor = new Actor(inputs[5].value, inputs[6].value, inputs[7].value, inputs[8].value);
    let actedMovies = newActor.checkMovies(moviesArr);
    if(actedMovies) {
        newActor.addMovies(tempArr[0].movieName, tempArr[0].directors, tempArr[0].year, tempArr[0].rating, tempArr[0].writers);
        actorsArr.push(newActor);
    }
    else {
        alert(`Error: Actor named ${newActor.name} has not acted in any movies from the DataBase!`)
    }
})

submitButtonThree.addEventListener("click", printActorMovies);
submitButtonFour.addEventListener("click", printAllActors);