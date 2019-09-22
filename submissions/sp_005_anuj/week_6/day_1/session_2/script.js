var arr = []
var submit_details = document.getElementById("submi")


class car {
    constructor(carMake, model, topSpeed, dist) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.distance = dist;
    }
    travelDist( time = 1, speed = topSpeed /2) {
        var dist = time * speed;
        this.distance = dist;
    }
    presentStatus() {
        return (this.carMake + this.model + this.topSpeed + this.distance)
    }
}
