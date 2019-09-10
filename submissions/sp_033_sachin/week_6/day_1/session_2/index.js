let cars = [];

class Car {
    constructor(carMake,model,topSpeed,dist=0){
        // console.log(dist);
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.dist = dist;
        // console.log(dist);
    }

    travelDist=(time=1,speed=this.topSpeed/2)=>{
        //  console.log(time,speed);
        this.dist = Number(time)*Number(speed);
        return this.dist;
    }

    presentStatus(){
        return `${this.carMake} ${this.model} ${this.topSpeed}km/hr ${this.dist}km`
    }
}

const initialiseCar = ()=>{
    // event.preventDefault();
    let carMakeInput = document.getElementById('carMakeInput').value;
    let modelInput = document.getElementById('modelInput').value;
    let topSpeedInput = document.getElementById('topSpeedInput').value;

    let newCar = new Car(carMakeInput,modelInput,topSpeedInput);
    // console.log(newCar,cars);
    cars.push(newCar);
    updateSelect();
}

const calculateDistance = ()=>{
    let selectCar = document.getElementById('selectCar').value;
    let car = cars.filter(c=>c.model==selectCar)[0];
    let speedInput = document.getElementById('speedInput').value;
    let timeInput = document.getElementById('timeInput').value;
    car.travelDist(timeInput,speedInput);
}

const displayDetails = ()=>{
    const displayContainer = document.getElementById('displayDetails');
    // console.log(cars);
    displayContainer.innerHTML = '';
    cars.forEach(car=>{
        displayContainer.append(car.presentStatus());
    })
}

const updateSelect = ()=>{
    let selectCar = document.getElementById('selectCar');
    selectCar.innerHTML = '';
    cars.forEach(car=>{
        let option = document.createElement('option');
        option.innerHTML = `${car.carMake}-${car.model}`;
        option.setAttribute('value',car.model);
        selectCar.appendChild(option);
    })
}