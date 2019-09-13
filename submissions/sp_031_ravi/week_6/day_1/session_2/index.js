function calculate() {
    var carCompany = document.getElementById("make").value;
    var carModel = document.getElementById("model").value;
    var carSpeed = document.getElementById("topSpeed").value;
    var carRide = document.getElementById("make").value;
    var time = document.getElementById("timeTaken").value;
    var totalSpeed = document.getElementById("travelSpeed").value;

    // var carDistance = document.getElementById("distance").value;
    // console.log(carCompany)
    // console.log(carModel)
    // console.log(carSpeed)
    //console.log(carDistance)
    class Car {
        constructor(carCompany,carModel,carSpeed) {
        this.carMake = carCompany;
        this.model = carModel;
        this.topSpeed = carSpeed;
        // this.dist = carDistance;
        }
        show() {
        return this.carMake, this.model, this.topSpeed;
        var selectOption = document.getElementById("selectCar");
        var option = document.createElement("option");
        option.text = this.carMake + " " + this.model;
        selectOption.add(option,selectOption[0])
        }
    }
    


    class Details extends Car {
        constructor (carCompany,carModel,carSpeed,carRide,time,totalSpeed) {
            super(carCompany, carModel, carSpeed);
            //super(carModel);
            // super(carSpeed);

            this.ride = carRide;
            this.timetaken = time;
            this.tSpeed = totalSpeed;
        }

        show1() {
            var x = document.getElementById("division");
            var x2 = document.createElement("h3");
            x2.textContent = this.carMake + " " + this.model + " " + this.topSpeed +"Km/h" + this.timetaken * this.totalSpeed + "Km"
            x.appendChild(x2);
        //    x.add(x2);
        }
    }
    mycar = new Details (carCompany, carModel, carSpeed, carRide, time, totalSpeed);
    mycar.show1();
}