var btn = document.getElementById("btnSubmit");

btn.addEventListener('click', carData);

var cars = []
class Car {
    constructor(carMake, model, topSpeed, dist) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.distance = dist;
    }
    dis() {
        this.distance =  speed;
        return this.distance
    }
}


var carSelect = document.querySelector("#carSelect");

var myCar;
function carData() {
    var carMakeVal = document.querySelector("#carMake").value;
    var modelVal = document.querySelector("#model").value;
    var topSpeedVal = document.querySelector("#topSpeed").value;

    myCar = new Car(carMakeVal, modelVal, topSpeedVal)
    cars.push(myCar)

    var option = document.createElement("option");
    option.textContent = carMakeVal;
    option.setAttribute("id", carMakeVal)
    carSelect.appendChild(option);
    return myCar
}

var click = document.querySelector("#click")
click.addEventListener('click', function () {

    var timeVal = document.querySelector("#time").value;
    var speedVal = document.querySelector("#speed").value;
    var speed = timeVal * speedVal
    
    var display = document.createElement("h4");
    display.textContent =  myCar,speed
    document.querySelector("body").appendChild(display)
});

