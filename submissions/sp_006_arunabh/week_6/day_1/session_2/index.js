$('document').ready(function(){
    $('#rightForm').hide();
    $('#display').hide();
});

var arr = [];
var myCar;
var totalDist = 0;

class Car {
    constructor(company = "invalid" , model = "invalid" , tspeed = "0" , dist = "0") {
        this.company = company;
        this.model = model;
        this.tspeed = tspeed;
        this.dist = dist;
    }

    travelDist(avgSpeed, time) {
        this.avgSpeed = avgSpeed;
        if(avgSpeed == null && time == 0) {
            time = 1;
            avgSpeed = this.tspeed/2;
            this.dist = avgSpeed * time;
            return(this.dist);
        }
        else{
            this.dist = avgSpeed * time;
            return(this.dist);
        }
    }
}

$('#submit_info').click(function(){
    var company = $('#maker').val();
    var model = $('#model').val();
    var tspeed = $('#speed').val();
   // var dist = $('#distance').val();
    
    $('#rightForm').show();

    $('#carList').append("<option>"+company+"</option>");

    myCar = new Car(company, model, tspeed);
    arr.push(myCar);
});

$("#ride_info").click(function(){
    var avgSpeed = $("#avgSpeed").val();
    var time = $("#time").val();
    var vehicle = $("#carList").val();
    for(var i = 0 ; i < arr.length ; i++) {
        if(vehicle == arr[i]["company"]) {
            totalDist = arr[i].travelDist(avgSpeed, time);
            arr[i]["dist"] = totalDist;
            $('#display').show();
        }
    }
});

$("#history").click(function(){
    for(var i = 0; i < arr.length; i++) {
        var info = arr[i]["company"] + " " + arr[i]["model"] + " " + arr[i]["tspeed"] + "km/hr" + " " + arr[i]["dist"];
        $("#display").append("<h4>"+info+"</h4>");
    }
});