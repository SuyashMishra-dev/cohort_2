class Student {
    constructor(name = 'invalid', email = 'invalid', phone = 'invalid') {
        this.name = name,
        this.email = email,
        this.phone = phone
    }

    assignMarks(...marks) {
       this.marks = marks;
    }

    highestMarks() {
        console.log(this.marks.reduce((a,c) => a < c ? c : a))
    }

    totalSubjects() {
        console.log(this.marks.length);
    }

    showMarks() {
        console.log(this.marks.join(' '));
    }

    average() {
        console.log(this.marks.reduce((a,b)=>a+b)/this.marks.length)
    }

    low() {
        console.log(this.marks.reduce((a,b)=>a > b ? b : a))
    }
}



var piyush = new Student('piyush', 'piyush@gmail.com', 9451672377);

piyush.assignMarks(1,2,3,5,4,8);
piyush.highestMarks();
piyush.totalSubjects();
piyush.showMarks();
piyush.average();
piyush.low();




// var name = document.getElementById('name').value;
// var email = document.getElementById('email').value;
// var phone = document.getElementById('phone').value;
// var students = [];
// students.push(piyush)