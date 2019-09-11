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
    dist(timeVal , speedVal) {
        return timeVal * speedVal;
    }
}



function carData() {
    var carMakeVal = document.querySelector("#carMake").value;
    var modelVal = document.querySelector("#model").value;
    var topSpeedVal = document.querySelector("#topSpeed").value;

    
    var myCar = new Car(carMakeVal, modelVal, topSpeedVal);
    cars.push(myCar)
    console.log(cars)

    var carSelect = document.querySelector("#carSelect");
    var option = document.createElement("option");
    option.textContent = carMakeVal;
    option.setAttribute("id", carMakeVal)
    carSelect.appendChild(option);

}

var click = document.querySelector("#click")
click.addEventListener('click', function () {

    var timeVal = document.querySelector("#time").value;
    var speedVal = document.querySelector("#speed").value;
    
    // for(var i = 0; i< cars.length; i++) {
    //     if()
    // }

});

