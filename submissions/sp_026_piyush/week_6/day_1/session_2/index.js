class Car {
    constructor(carMake, model, topSpeed) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        // this.dist = 0;
        // this.submit = this.submit.bind(this)
    }
    dist = 0;

    submit () {
        var carDetails = document.querySelectorAll('.carDetails');
        var carMake = carDetails[0].value;
        var model = carDetails[1].value;
        var topSpeed = carDetails[2].value;
        
        var model = new Car(carMake, model, topSpeed);

        // myCar = [...myCar, new Car(carMake, model, topSpeed)];
        // donot delete the above line
        myCar = [...myCar, model];

        // console.log(myCar)
        
        var carList = [];
        carList = document.getElementById('carList');
        var options = document.createElement('option');
        options.value = myCar[myCar.length-1].model;
        options.textContent = myCar[myCar.length-1].model;
        carList.appendChild(options);
    }
    
    travelDist (time = 1, speed) {
        var carList = document.getElementById('carList');
        var currentCar = carList.value;
        time = document.getElementById('time').value;
        speed = document.getElementById('speed').value;
        var newDist = speed * time;
        
        for(var i = 0; i < myCar.length; i++) {
            if(myCar[i].model = currentCar) {
                myCar[i].dist = myCar[i].dist + newDist;
            }
        }
        // console.log(myCar);
    }
    
    presentStatus () {
        var carList = document.getElementById('carList');
        var currentCar = carList.value;
        console.log(myCar)
        var temp = myCar.filter(elem => elem.model === currentCar);
        // console.log(temp);
        var display = document.getElementById('display');
        var div = document.createElement('div');
        div.innerHTML = `${temp[0].carMake} ${temp[0].model} ${temp[0].topSpeed}km/hr ${temp[0].dist}km`;
        display.appendChild(div);
    }
}
var honda = new Car('Maruti', 'Baleno', 120, 100);
var myCar = [];



// function submit () {
//     var carDetails = document.querySelectorAll('.carDetails');
//     var carMake = carDetails[0].value;
//     var model = carDetails[1].value;
//     var topSpeed = carDetails[2].value;

//     myCar = [...myCar, new Car(carMake, model, topSpeed)];
//     console.log(myCar)

//     var carList = [];
//     carList = document.getElementById('carList');
//     var options = document.createElement('option');
//     options.value = myCar[myCar.length-1].model;
//     options.textContent = myCar[myCar.length-1].model;
//     carList.appendChild(options);
// }

// function travelDist (time = 1, speed) {
//     var carList = document.getElementById('carList');
//     var currentCar = carList.value;
//     time = document.getElementById('time').value;
//     speed = document.getElementById('speed').value;
//     newDist = speed * time;
    
//     for(i = 0; i < myCar.length; i++) {
//         if(myCar[i].model = currentCar) {
//             myCar[i].dist = myCar[i].dist + newDist;
//         }
//     }
//     console.log(myCar);
// }

// function presentStatus () {
//     var carList = document.getElementById('carList');
//     var currentCar = carList.value;
//     var temp = myCar.filter(elem => elem.model === currentCar).map(elem => elem);
//     console.log(temp)
//     var display = document.getElementById('display');
//     var div = document.createElement('div');
//     div.innerHTML = `${temp[0].carMake} ${temp[0].model} ${temp[0].topSpeed}km/hr ${temp[0].dist}km`;
//     display.appendChild(div)
// }
