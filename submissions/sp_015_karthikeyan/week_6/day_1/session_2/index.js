class Car {
    constructor(carMake, model, topSpeed, distance = 0) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.distance = distance;
    }
    travelDist(time = 1, speed = topSpeed / 2) {
        var dist = speed * time;
        this.distance = dist;
    }
    presentStatus() {
        return (this.carMake + " " + this.model + " " + this.topSpeed + "km/hr" + " " + this.distance);
    }
}

var submitButtonOne = document.getElementById("submit-one");
var submitButtonTwo = document.getElementById("submit-two");
var listAllButton = document.getElementById("list-all");
var inputs = document.querySelectorAll("input");
var carsSelector = document.getElementById("car-selector");
var div = document.getElementById("list");
var carsArr = [];

submitButtonOne.addEventListener("click", function() {
    var newCar = new Car(inputs[0].value, inputs[1].value, inputs[2].value);
    carsArr.push(newCar);
    console.log(carsArr);
    updateSelectors(carsArr);
    
})

submitButtonTwo.addEventListener("click", function() {
    var query = carsSelector.value;
    filteredItem = carsArr.filter(car => car.model == query);
    filteredItem[0].travelDist(inputs[3].value, inputs[4].value);
    console.log(filteredItem);
})

listAllButton.addEventListener("click", function() {
    for(i = 0; i < carsArr.length; i++) {
        var p = document.createElement("p");
        p.textContent = carsArr[i].presentStatus();
        div.appendChild(p);
    }    
})


function updateSelectors(carsArr) {
    carsSelector.innerHTML = '';
    for(i = 0; i < carsArr.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", carsArr[i].model);
        option.innerHTML = carsArr[i].carMake + " " + carsArr[i].model;
        carsSelector.appendChild(option);
    }
}

