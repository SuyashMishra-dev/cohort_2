class Car {
   constructor(carMake, model, topSpeed, dist) {
       this.carMake = carMake;
       this.model = model;
       this.topSpeed = topSpeed;
    }

}
function submit() {
    var para = document.getElementById('car_make').value;
    document.getElementById('para').innerHTML = para;
}
