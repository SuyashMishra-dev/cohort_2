class Car {
    constructor(carMake, model, topSpeed) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
    }
    var dist = 0;

    travelDist(time = 1, speed = .5 * this.topSpeed) {
        var dist = 0;
        dist = time * speed;
    }

    presentStatus () {

    }
}
// var myCar = new Car('Maruti', 'Baleno', 120, 100);

function submit () {
    var carDetails = document.querySelectorAll('.carDetails');
    // console.log(carDetails.length);
    var carMake = carDetails[0].value;
    var model = carDetails[1].value;
    var topSpeed = carDetails[2].value;

    var myCar = [];
    myCar.push(new Car(carMake, model, topSpeed));
    // console.log(myCar[0])
    for(i = 0; i < myCar.length; i++) {
        var carList = document.getElementById('carList');
        var options = document.createElement('option');
        options.value = myCar[i].model;
        options.textContent = myCar[i].model;
        carList.appendChild(options);

    }
}

// function travelDist (time, speed) {
//     var carList = document.getElementById('carList');
//     var currentCar = carList.value;
//     console.log(currentCar);
// }

