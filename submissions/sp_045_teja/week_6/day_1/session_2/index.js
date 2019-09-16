class Car {
    constructor(carMake,model,topSpeed,dist) {
        this.carMake = carMake
        this.model = model
        this.topSpeed = topSpeed
        this.dist = dist
    }

    distance(time = 1, speed = this.topSpeed/2) {
        var distance = time * speed 
        this.dist = distance;
    }

    list() {
        for( var i = 0; i < carArr.length; i++) {
            var h1 = document.createElement("h1")
            var divElem = document.getElementById("root")
            h1.innerHTML = `<h1>${this.carMake} ${this.model} ${this.topSpeed} km/hr ${this.dist} km </h1>` 
            divElem.appendChild(h1)
            console.log("here")
       }
    }
}

var inputs  = document.querySelectorAll("input")
var select = document.getElementById("select")
var carArr = []
let newDeatils = null;


function sumbit() {
    newDeatils = new Car(inputs[0].value,inputs[1].value,inputs[2].value)
    carArr.push(newDeatils);
    console.log(carArr)
    selectoritems(carArr);
}

function sumbit1() {
    var detail = select.value;
    console.log(detail)
    filteredetail = carArr.filter(element => element.model == detail);
    filteredetail[0].distance(inputs[3].value, inputs[4].value);
    console.log(carArr)
}


function sumbit2() {
    newDeatils.list()
    console.log(newDeatils)
}

function selectoritems(carArr) {
    for(i = 0; i < carArr.length; i++) {
        var opt = document.createElement("option");
        opt.setAttribute("value", carArr[i].model)
        opt.innerHTML = carArr[i].carMake + " " + carArr[i].model;
        select.appendChild(opt);
    }
}
