class car {
        constructor(make, model, topSpeed, distance = 0) {
          this.make = make;
          this.model = model;
          this.topSpeed = topSpeed;
          this.distance = distance;
        }
        travelDist(time = 1, speed = topSpeed / 2) {
            var distance1 = speed * time;
            this.distance = distance1;
        }
        presentStatus() { 
           return (this.make + " " + this.model + " " + this.topSpeed + "km/hr " + this.distance);
        }
      }
      var arrOfCar = [];
      var submit1 =  document.getElementById("submitInfo");
      submit1.addEventListener('click', function() {

      });
