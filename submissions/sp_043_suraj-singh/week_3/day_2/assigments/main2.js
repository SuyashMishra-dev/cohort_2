var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
//now compare the input and resultType value and formula
//meter to all units
if (inputTypeValue === "meter" && resultTypeValue==="kilometer"){
    result.value = Number(input.value) * 0.001;
}

else if (inputTypeValue === "meter" && resultTypeValue==="mile"){
    result.value = Number(input.value) * 0.0006213712;
}

else if (inputTypeValue === "meter" && resultTypeValue==="light year"){
    result.value = Number(input.value) * 1.057000834E-16;
}

else if (inputTypeValue === "meter" && resultTypeValue==="meter"){
    result.value = input.value;
}

//kilometer to all unit mention

if (inputTypeValue === "kilometer" && resultTypeValue==="meter"){
    result.value = Number(input.value) * 1000;
}

else if (inputTypeValue === "kilometer" && resultTypeValue==="mile"){
    result.value = Number(input.value) * 0.6213711922;
}

else if (inputTypeValue === "kilometer" && resultTypeValue==="Light Year"){
    result.value = Number(input.value) * 1.057000834E-13;
}

else if (inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
    result.value = input.value;
}

//mile to all unit mention

if (inputTypeValue === "mile" && resultTypeValue==="meter"){
    result.value = Number(input.value) * 1609.344;
}

else if (inputTypeValue === "mile" && resultTypeValue==="kilometer"){
    result.value = Number(input.value) * 1.609344;
}

else if (inputTypeValue ==="mile" && resultTypeValue==="light year"){
    result.value = Number(input.value) * 1.70107795E-13;
}

else if (inputTypeValue ==="mile" && resultTypeValue==="mile"){
    result.value = input.value;
}

//light year to all unit mention

if (inputTypeValue === "light year" && resultTypeValue==="meter"){
    result.value = Number(input.value) * 9460730472580044;
}

else if (inputTypeValue === "light year" && resultTypeValue==="kilometer"){
    result.value = Number(input.value) * 9460730472580;
}

else if (inputTypeValue === "light year" && resultTypeValue==="mile"){
    result.value = Number(input.value) * 5878625373183;
}

else if (inputTypeValue === "light year" && resultTypeValue==="light year"){
    result.value = input.value;
}
//celsius to another unit

if (inputTypeValue === "celsius" && resultTypeValue==="kelvin"){
    result.value = Number(input.value) * 274.15;
}

else if (inputTypeValue === "celsius" && resultTypeValue==="fahrenheit"){
    result.value = Number(input.value) * 33.8;
}

else if (inputTypeValue === "celsius" && resultTypeValue==="celsius"){
    result.value = input.value;
}

//Kelvin to another unit

if (inputTypeValue === "kelvin" && resultTypeValue==="celsius"){
    result.value = Number(input.value) * -272.15;
}

else if (inputTypeValue === "kelvin" && resultTypeValue==="fahrenheit"){
    result.value = Number(input.value) * -457.87;
}

else if (inputTypeValue === "kelvin" && resultTypeValue==="kelvin"){
    result.value = input.value;

    //Fahrenheit to another unit

if (inputTypeValue === "fahrenheit" && resultTypeValue==="celsius"){
    result.value = Number(input.value) * -17.222222222;
}

else if (inputTypeValue === "fahrenheit" && resultTypeValue==="kelvin"){
    result.value = Number(input.value) * 255.92777778;
}

else if (inputTypeValue === "fahrenheit" && resultTypeValue==="fahrenheit"){
    result.value = input.value;
}

    //liter to another unit

    if (inputTypeValue === "liter" && resultTypeValue==="milliliter"){
        result.value = Number(input.value) * 1000;
    }
    
    else if (inputTypeValue === "liter" && resultTypeValue==="us gallon"){
        result.value = Number(input.value) * 0.2641721769;
    }
    
    else if (inputTypeValue === "liter" && resultTypeValue==="imperial tea spoon"){
    result.value = Number(input.value) * 168.93638269;
    }
    else if (inputTypeValue === "liter" && resultTypeValue==="liter"){
        result.value = input.value;
    }

    //milliliter to another unit

    if (inputTypeValue === "milliliter" && resultTypeValue==="liter"){
        result.value = Number(input.value) * 0.001;
    }
    
    else if (inputTypeValue === "milliliter" && resultTypeValue==="us gallon"){
        result.value = Number(input.value) * 0.0002641722;
    }
    
    else if (inputTypeValue === "milliliter" && resultTypeValue==="imperial tea spoon"){
    result.value = Number(input.value) * 0.1689363827;
    }
    else if (inputTypeValue === "milliliter" && resultTypeValue==="milliliter"){
        result.value = input.value;
    }

    //us gallon to another unit

    if (inputTypeValue === "us gallon" && resultTypeValue==="liter"){
        result.value = Number(input.value) * 3.78541;
    }
    
    else if (inputTypeValue === "us gallon" && resultTypeValue==="milliliter"){
        result.value = Number(input.value) * 3785.41;
    }
    
    else if (inputTypeValue === "us gallon" && resultTypeValue==="imperial tea spoon"){
    result.value = Number(input.value) * 639.49347241;
    }
    else if (inputTypeValue === "us gallon" && resultTypeValue==="us gallon"){
        result.value = input.value;
    }

    //imperial tea spoon to another unit

    if (inputTypeValue === "imperial tea spoon" && resultTypeValue==="liter"){
        result.value = Number(input.value) * 0.005919388;
    }
    
    else if (inputTypeValue === "imperial tea spoon" && resultTypeValue==="milliliter"){
        result.value = Number(input.value) * 5.9193880208;
    }
    
    else if (inputTypeValue === "imperial tea spoon" && resultTypeValue==="us gallon"){
    result.value = Number(input.value) * 0.0015637376;
    }
    else if (inputTypeValue === "imperial tea spoon" && resultTypeValue==="imperial tea spoon"){
        result.value = input.value;
    }

}
}