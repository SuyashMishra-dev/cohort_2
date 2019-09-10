
var cars = [];
class Car {
    constructor(carmake, model, topspeed, distance = 0) {
        this.carmake = carmake;
        this.model = model;
        this.topspeed = topspeed;
        this.dist = distance;
    }
    travelDist = (time = 1, speed = this.topspeed / 2) => {

        this.dist = speed * time;
        console.log(time)
        return this.dist;

    }
}
class Student {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;

    }
    assignMarks(...mark) {
        this.marks = mark;
    }
    highestMarks() {
        var totalmarks = this.marks.sort();
        return totalmarks[totalmarks.length - 1]
    }
    totalSubjects() {
        return this.marks.length;
    }
    showMarks() {
        return this.marks
    }
    average() {
        let count = this.marks.length;
        const reducer = (a, c) => a + c;
        let mark1 = this.marks.reduce(reducer)
        return mark1 / count
    }
    low() {
        var ele = this.marks.sort();
        return ele[0];
    }


}

function press() {
    var carmake1 = document.getElementById('make').value;
    var model1 = document.getElementById('model').value;
    var top1 = document.getElementById('topspeed').value;
    var car1 = new Car(carmake1, model1, top1)
    var bodyy = document.getElementById("dist")
    cars.push(car1)
    cars.forEach(element => {

        var opt = document.createElement('option')
        opt.innerHTML = element.model;
        opt.setAttribute('value', element.model)

        bodyy.appendChild(opt)
    });
}

var btn1 = document.getElementById("distpress")
btn1.addEventListener('click', function () {
    var speed1 = document.getElementById("speed").value
    var time1 = document.getElementById("time").value
    var distance = document.getElementById("dist").value

    bodyy = document.querySelector('body')
    for (var a = 0; a < cars.length; a++) {
        if (cars[a].model == distance) {
            cars[a].travelDist(time1, speed1)
            var elem = document.createElement('p')
            elem.innerHTML = (`carmake ${cars[a].carmake} carmodel ${cars[a].model} cartopspeed ${cars[a].topspeed} distance ${cars[a].dist}`)

            bodyy.appendChild(elem)
            break;
        }
    }

})

var btn2 = document.getElementById("show")

btn2.addEventListener("click", function () {
    var bodyy = document.querySelector("#print")
    cars.forEach(element => {
        var elem = document.createElement('p');
        elem.innerHTML = element.model;
        bodyy.appendChild(elem);


    });
})