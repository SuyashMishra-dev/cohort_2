process= ()=> {
    var Finalmarks = [];
    var name = document.getElementById("Sname").value;
    var email = document.getElementById("Semail").value;
    var number = document.getElementById("Sphone").value;
    marks = document.getElementById("Smarks").value;
    Finalmarks.push(Number(marks));
    console.log(Finalmarks)
    class Student{
        constructor(name,email,number,marks){
            this.Name = name;
            this.Email=email;
            this.Number = number;
            this.Marks = marks;
        }
        show=()=>{
            
            
            
            document.getElementById("display").innerHTML = this.Name + " "+ this.Email;
            
        }
    }

    student = new Student(name,email,number,marks)
    student.show()
}