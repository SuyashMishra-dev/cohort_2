var moviesArr = [];
var actorsArr = [];
var flag = [];
var submit_movie = document.getElementById("submit_movie");
var submit_actor = document.getElementById("submit_actor");
var submit_all_movie = document.getElementById("see_all_movie");
var submit_all_actor = document.getElementById("see_all_actors");
var see_all_movie = document.getElementById("see_movies_details");
var inputs = document.querySelectorAll("input");
var div = document.querySelector("#root");

class Movie {
    constructor(movie_name, directors, year, rating, writers) {
        this.movie_name = movie_name;
        this.directors = directors;
        this.year = year;
        this.rating = rating;
        this.writers = writers;
    }

    printMovie() {
        return `Name: ${this.movie_name}
        Directors: ${this.directors.reduce((a, b) => a + ", " + b)}
        Year: ${this.year}
        Rating: ${this.rating}
        Writers: ${this.writers.reduce((a, b) => a + ", " + b)}`
    }
}

class Actor extends Movie {
    constructor(actor_name, age, dob, movie) {
        super();
        this.name = actor_name;
        this.age = age;
        this.dob = dob;
        this.movie = movie;
    }
    check_movies(arr) {
        flag = [];
        flag = arr.filter(movie => movie.movie_name == this.movie);
        if (flag.length > 0) {
            return true;
        } else false;
    }
    add_new_movies(movie_name, directors, year, rating, writers) {
        this.movie_name = movie_name;
        this.directors = directors;
        this.year = year;
        this.rating = rating;
        this.writers = writers;
    }
    print_actor_details() {
        return `Name: ${this.name} 
        Age: ${this.age}  
        DOB: ${this.dob}  
        Movie: ${this.movie}`;
    }
}

function print_all_actors(event) {
    event.preventDefault();
    for (var i = 0; i < actorsArr.length; i++) {
        var p = document.createElement("p");
        p.innerHTML = actorsArr[i].print_actor_details()
        p.style.fontSize = '40px'; 
        p.setAttribute("class", "text-center mt-5 text-light")
        div.appendChild(p); 
    }
}

function print_actor_movies(event) {
    event.preventDefault();
    div.innerHTML = "";
    for (var i = 0; i < actorsArr.length; i++) {
        if (actorsArr[i].name == inputs[9].value) {
            var p = document.createElement("p");
            p.textContent = actorsArr[i].print_actor_details();
            p.style.fontSize = '40px'; 
            p.setAttribute("class", "text-center mt-5 text-light")
            div.appendChild(p);
        }
    }
}

submit_movie.addEventListener("click", function (event) {
    event.preventDefault();
    var newMovie = new Movie(inputs[0].value, inputs[1].value.split(","), inputs[2].value, inputs[3].value, inputs[4].value.split(","));
    moviesArr.push(newMovie);
})

see_all_movie.addEventListener("click", function (event) {
    event.preventDefault();
    div.innerHTML = '';
    for (i = 0; i < moviesArr.length; i++) {
        var p = document.createElement("p");
        p.innerHTML = moviesArr[i].printMovie();
        p.style.fontSize = '40px';
        p.setAttribute("class", "text-center mt-5 text-light")
        div.appendChild(p);
    }
})

submit_actor.addEventListener("click", function (event) {
    event.preventDefault();
    var add_new_actor = new Actor(inputs[5].value, inputs[6].value, inputs[7].value, inputs[8].value);
    var movie_of_actor = add_new_actor.check_movies(moviesArr);
    if (movie_of_actor) {
        add_new_actor.add_new_movies(flag[0].movie_name, flag[0].directors, flag[0].year, flag[0].rating, flag[0].writers);
        actorsArr.push(add_new_actor);
    } else {
        alert(`Error: Actor named ${add_new_actor.name} has not acted in any movies from the DataBase!`)
    }
})

submit_all_movie.addEventListener("click", print_actor_movies);
submit_all_actor.addEventListener("click", print_all_actors);