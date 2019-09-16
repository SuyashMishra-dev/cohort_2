var arr = []
class car {
    constructor(carMake, model, topSpeed, dist) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.dist = dist;
    }
}

function details() {
    var car_make = document.getElementById('cmp_nm').value;
    var model = document.getElementById('mod_nm').value;
    var top_speed = document.getElementById('top_speed').value;

    var newDetails = new details(car_make, model, top_speed)
    arr.push(newDetails)
    console.log(arr)
}