const moviesArr = [];
const actorArr = [];

class Movie {
    constructor(name,directors,year,rating,writers){
        this.name = name;
        this.directors = directors; 
        this.year = Number(year);
        this.rating = Number(rating);
        this.writers = writers;
    }    

    printMovie(){
        return `Name: ${this.name}\n Directors: ${this.directors.join(', ')}\nYear: ${this.year}\n Rating: ${this.rating}\n Writers: ${this.writers.join(', ')}`
    }
}

class Actor extends Movie {
    constructor(name,age,dob,movieName){
        // const movie = moviesArr.filter(mo=>mo.name == movieName)[0];
        // movie.name,movie.directors,movie.year,movie.rating,movie.writers
        super();
        this.aname = name;
        this.age = age;
        this.dob = dob;        
        this.movie = movieName;
    }

    addSuper(name,directors,year,rating,writers){
        super.name = name;
        super.directors = directors;
        super.year = year;
        super.rating = rating;
        super.writers = writers;
    }

    checkMovies(arr){
        let filteredArr = arr.filter(mov=>mov.name == this.movie);
        if (filteredArr.length>0) {
            return filteredArr[0];
        } else{
            return false;
        }        
    }

    printActor(){
        return `Name: ${this.aname}\n Age: ${this.age} DOB: ${this.dob} Movie: ${this.movie}`;        
    }
}

const printAllMovies = ()=>{
    let displayContainer = document.getElementById('displayContainer');
    displayContainer.innerHTML = '';
    moviesArr.forEach(movie=>{
        displayContainer.append(movie.printMovie());
    })
}

const printAllActors=()=>{
    let displayContainer = document.getElementById('displayContainer');
    displayContainer.innerHTML = '';
    actorArr.forEach(actor=>{
        displayContainer.append(actor.printActor());
    })
}

let actorForm = document.getElementById('actorForm');
actorForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let name = document.getElementById('actorNameInput').value;
    let age = document.getElementById('ageInput').value;
    let dob = document.getElementById('dobInput').value;
    let movie = document.getElementById('movieInput').value;
    createNewActor(name,age,dob,movie);
})

let movieForm = document.getElementById('movieForm');
movieForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let name = document.getElementById('movieNameInput').value;
    let directors = document.getElementById('directorsInput').value.split(',');
    let year = document.getElementById('yearInput').value;
    let rating = document.getElementById('ratingInput').value;
    let writers = document.getElementById('writersInput').value.split(',');
    createNewMovie(name,directors,year,rating,writers);
})

const createNewActor = (name,age,dob,movie)=>{
    let newActor = new Actor(name,age,dob,movie);
    let movieActed = newActor.checkMovies(moviesArr);
    if(movieActed){
        newActor.addSuper(movieActed.name,movieActed.directors,movieActed.year,movieActed.rating,movieActed.writers);
        actorArr.push(newActor);
    } else {
        let displayContainer = document.getElementById('displayContainer');
        displayContainer.innerHTML = `Error: Actor named ${newActor.name} has not acted in any movies from the DataBase!`;
    }
}

const createNewMovie = (name,directors,year,rating,writers)=>{
    let newMovie = new Movie(name,directors,year,rating,writers);
    moviesArr.push(newMovie);
}