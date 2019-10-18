class car {
        constructor(Company, Model, topSpeed, Distance = 0) {              //to construct a new object
          this.Company = Company;
          this.Model = Model;
          this.topSpeed = topSpeed;
          this.Distance = Distance;
        }
      }
      var carArr = [];
      var submitButton = document.querySelector('#submitInfo');
      var newInput = document.querySelectorAll('.inputValue');
      submitInfo.addEventListener('click', function() {
        var newCar = new car(newInput[0].value, newInput[1].value, newInput[2].value);
        carArr.push(newCar);
        console.log(carArr);
        localStorage.setItem(this.carArr);
        //console.log(document.querySelectorAll('inputValue').value);
      });
      