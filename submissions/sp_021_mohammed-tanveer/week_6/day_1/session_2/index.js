$("#selectTag").hide();
$("#displayText").hide();
let allCars = [];

class Car {
    constructor(carMake, model, topSpeed, dist){
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.dist = 0;
    }
    travelDist(time, speed){

        this.dist += time * speed;
        // console.log(this.dist)
        return this.dist;
        
    }
    presentStatus(){
        let displayData = this.carMake + ' ' + this.model + ' ' + this.topSpeed + 'km/hr' + ' ' + this.dist + 'km';
        $("#displayCar").text(displayData);
        // return showData;
    }
}

$("#carInputSubmit").click(function(){
    let carNameInput = $("#carNameInput").val()
    let carModelInput = $("#carModelInput").val()
    let carTopSpeedInput = $("#carTopSpeedInput").val()
    let addCar = new Car(carNameInput, carModelInput, carTopSpeedInput);
    allCars.push(addCar);

    $("select").empty();

    for(let i = 0; i < allCars.length; i++){
        $("select").append(`<option value='${ allCars[i].model }'>${ allCars[i].carMake }-${ allCars[i].model }</option>`);
    }
    $("#selectTag").show();
})

$("#carTimeInput").keyup(function(){
    var carTime = $(this).val();
    if (carTime <= 0 || carTime != Number(carTime)) {
        $(this).val(1);
    }
})

$("#carSpeedInput").keyup(function(){
    let selectedCar = $("#selectCar").val();

    for(var i = 0; i < allCars.length; i++){
        if (allCars[i].model == selectedCar) {
            var carSpeed = $(this).val();
            if (carSpeed <= 0 || carSpeed != Number(carSpeed)) {
                let halfSpeed = allCars[i].topSpeed / 2;
                $(this).val(halfSpeed);
            }
        } 
    }
})

$("#carSelectSubmit").click(function(){
    // console.log(allCars.length)
    let selectedCar = $("#selectCar").val();
    let carSpeedInput = $("#carSpeedInput").val();
    let carTimeInput = $("#carTimeInput").val();

    for(var i = 0; i < allCars.length; i++){
        if (allCars[i].model == selectedCar) {
            allCars[i].travelDist(carTimeInput, carSpeedInput);
            $("#displayText").show();
        } 
    }
})

$("#getStatus").click(function(){
    let selectedCar = $("#selectCar").val();
    for(var i = 0; i < allCars.length; i++){
        if (allCars[i].model == selectedCar) {
            allCars[i].presentStatus();
        } 
    } 
})