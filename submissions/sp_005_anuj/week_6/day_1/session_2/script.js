var cars = []
var submit_details = document.getElementById("submit_details");
var submit = document.getElementById("submit");
var view_all_details = document.getElementById("view_all_details");
var input = document.querySelectorAll("input");
var choose_car = document.getElementById("choose_car");
var details_view = document.getElementById("details_view")

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

submit_details("click", function() {
    var new_car = new Car(input[0].value, input[1].value, input[2].value);
    cars.push(new_car);
    updateSelecotors(cars);
    
})
submit.addEventListener("click", function() {
    var select =choose_car.value;
    filteredItem = cars.filter(car => car.model == select);
    filteredItem[0].travelDist(input[3].value, input[4].value);
})
view_all_details.addEventListener("click",function() {
    for(var i =0; i < car.length; i++) {
        var para = document.createElement("p");
        para.textContent = cars[i].presentStatus();
        div,this.appendChild(p);
    }
})
function updaate(cars) {
    select.innerHTML = '';
    for(var i = o; i < cars.length; i++) {
        var option = docment.createElement("option");
        option.setAttribute("value", cars[i].model);
        option.innerHTML = cars[i].carMake + " " + cars[i].model;
        select.appedChild(option);
    }
}
