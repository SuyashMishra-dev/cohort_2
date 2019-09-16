
10.   What is the value of a, b, c?

class Room{
    constructor(l = 0,b = 0, h = 0,t = 0 ){
        this.len  = l;
        this.br   = b;
        this.ht   = h;
        this.tempC = t;
    }
    toKelvinFromCelsius( a = 0){
        this.tempC =  this.tempC || a
        return this.tempC+273.15;
    }
    toFarFromCelsius(){

    }
}

s1 = new Room(10,10,10)

c =s1.toKelvinFromCelsius()
a = s1.toKelvinFromCelsius(100)
b = s1.toKelvinFromCelsius(200)

Answer
a = 373.15
b = 373.15
c = 273.15

Explanation:
Default Values : l = 0, b = 0, h = 0, t = 0
Values changes after Object creation(i.e, s1) : l = 10, b = 10, h = 10, t = 0;

c = calls toKelelvinFromCelsius function with no arguement
so, a = 0 (Default value)
compares between this.tempC and a for max of these two.
Hereeeee, it is 0.
Then, return 273.15

a = calls toKelelvinFromCelsius function with one arguement
so, a = 100
compares between this.tempC and a for max of these two and assigns the value to this.tempC
Hereeeee, it is 100.
Then, return 373.15

b = calls toKelelvinFromCelsius function with one arguement
so, a = 200
compares between this.tempC and a for max of these two.
Here, it is .
Then, return 373.15



11.    What is the output from the following program

const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)

Answer
Hey 10 + 00010010 is = 20

y calls x with 3 arguments.
reduce method returns one single integer value. ie. sum / length = 60/3 = 20