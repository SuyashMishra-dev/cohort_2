class Car {
    constructor(carMake, model, topSpeed, dist){
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.dist = 0;
    }
}

$("#carInputSubmit").click(function(){
    let carNameInput = $("#carNameInput").val()
    let carModelInput = $("#carModelInput").val()
    let carTopSpeedInput = $("#carTopSpeedInput").val()
    let addCar = new Car(carNameInput, carModelInput, carTopSpeedInput);
    
})

$("#carSelectSubmit").click(function(){

})