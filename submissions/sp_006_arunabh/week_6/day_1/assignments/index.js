let moviesArr = [];
// console.log(moviesArr);

//Submit Movie
var movieInfo = document.getElementById('submitMovie');
movieInfo.addEventListener('click', function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var director = $("#directors").val();
    var year = $("#year").val();
    var rating = $("#rating").val();
    var writer = $("#writers").val();

    var newMovie = new Movie(name, director, year, rating, writer);
    moviesArr = [...moviesArr,newMovie];
    // console.log(moviesArr)
});

//Print All Movies
var parentDiv = document.getElementById('root');
var displayMovies = document.getElementById('print');
displayMovies.addEventListener('click', function(event) {
    event.preventDefault();

    for(var i = 0; i < moviesArr.length; i++) {
        var p = document.createElement('p');
        p.textContent = moviesArr[i].printMovie();
        parentDiv.appendChild(p);
    }
});

class Movie{
    constructor(name, directors, year, rating, writers){
        this.name = name;
        this.directors = directors;
        this.year = year;
        this.rating = rating;
        this.writers = writers;
    }

    printMovie() {
            return `Name : ${this.name}
            Directors : ${this.directors}
            Year : ${this.year}
            Rating : ${this.rating}
            Writers : ${this.writers}
            `;
    }
}

// Actor Info
let actorArr = [];

var submitActor = document.getElementById('submitActor');
var actorMovies = document.getElementById('actorMovies');
var allActors = document.getElementById('allActors');
var display = document.getElementById('display');
var moviesDisplay = document.getElementById('moviesDisplay');

class Actor extends Movie {
    constructor(name, age, dob, movie) {
        super();
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.movie = movie;
    }

    checkMovies(arr) {
        var movie = this.movie.split(",");
        for(var i = 0; i < movie.length; i++){
            var obj = arr.filter(el => movie[i] === el.name);
            if(obj.length == 0) {
                return false;
            }
            else {
                return obj;
            }
        }
    }

}

submitActor.addEventListener('click', function(event) {
    event.preventDefault();

    var actorName = $('#actorName').val();
    var actorAge = $('#actorAge').val();
    var actorDob = $('#actorDob').val();
    var actorMovie = $('#actorMovie').val();

    var newActor = new Actor(actorName, actorAge, actorDob, actorMovie);
    var result = newActor.checkMovies(moviesArr);
    if(result == false) {
        display.textContent = `Error: Actor named ${actorName} has not acted in any movies from the DataBase!`
    }
    else{
        for(var i = 0; i < result.length; i++) {
            newActor = {
                ...newActor,
                directors: result[i].directors,
                year: result[i].year,
                rating: result[i].year,
                writers: result[i].writers
            }
        }
        // console.log(newActor);
        actorArr = [...actorArr, newActor];
        console.log(actorArr)
    }
})

allActors.addEventListener('click', function(event) {
    event.preventDefault();

    for(var i = 0; i < actorArr.length; i++) {
        var list = document.createElement('li');
        list.textContent = actorArr[i].name;
        display.appendChild(list);
    }
})

actorMovies.addEventListener('click', function(event) {
    event.preventDefault();

    var mainActor = document.getElementById('mainActor').value;

    var result = actorArr.filter(el => mainActor === el.name);
    
    for(var i = 0; i < result.length; i++) {
        var para = document.createElement('p');
        para.textContent = `Name : ${result[i].movie}
        Directors : ${result[i].directors}
        Year : ${result[i].year}
        Rating : ${result[i].rating}
        Writers : ${result[i].writers}
        `;
        display.appendChild(para);
    }
})
