var car = [];
var details = [];
class Car {
  constructor(car_make, model, top_speed, dist = 0) {
    this.car_make = car_make;
    this.model = model;
    this.top_speed = top_speed;
    this.dist = dist;
  }
  travelDistance = (time = 1, speed = this.topSpeed / 2) => {
    console.log(time, speed);
    this.dist = Number(time) * Number(speed);
    return this.dist;
  }
}
class CarDetl {
  constructor(selectCar, time, speed) {
    this.selectCar = selectCar;
    this.time = time;
    this.speed = speed;
  }
}

function submitBtn() {
  var carMake = document.getElementById("carMake").value;
  var model = document.getElementById("model").value;
  var topSpeed = document.getElementById("topSpeed").value;
  var CarDetails = new Car(carMake, model, topSpeed);
  car.push(CarDetails);
  console.log(car);
  var selectCar = document.getElementById("carName");
  var options = document.createElement('option');
  options.textContent = carMake + ' ' + model;
  selectCar.appendChild(options);
}

function submitDetails() {
  var selectCar = document.getElementById("carName").value;
  var time = document.getElementById("time").value;
  var speed = document.getElementById("speed").value;
  var CarDetail = new CarDetl(selectCar, time, speed);
  details.push(CarDetail);
  console.log(details);

  console.log(selectCar + ' ' + time + ' ' + speed);
}
function calculateDistance(){
  var selectCar = document.getElementById('selectCar').value;
  var car = cars.filter(c=>c.model==selectCar)[0];
  var speed = document.getElementById('speed').value;
  var time = document.getElementById('time').value;
  car.travelDistance(time,speed);
}
function status() {
  console.log(`${this.carMake} ${this.model} ${this.topSpeed}km/hr ${this.dist}km`);
  return `${this.carMake} ${this.model} ${this.topSpeed}km/hr ${this.dist}km`
}
function displayDetails(){
  var display=document.getElementById("displayDetails");
  car.forEach(car=>{
    display.append(car.status());
})
}


