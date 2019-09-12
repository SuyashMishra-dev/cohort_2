What is the value of `a`, `b`, `c`?

```
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
```

Answer

```
a = 373.15
b = 
c = 273.15

Explanation :
1.in a = s1.toKelvinFromCelsius, paramter is 100 so it will return 100+ 273.15 = 373.15
2.
3.in c = s1.toKelvinFromCelsius, paramter is none so it will assume the default value of a which is 0 and then it will return 0+ 273.15 = 273.15
```

What is the output from the following program

```
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
```

Answer

```

```

