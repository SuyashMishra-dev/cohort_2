class Student {
    constructor(name,email,phone) {
        this.name = name
        this.email = email
        this.phone = phone
    }
    displayDetails() {
        console.log(this.name,this.email,this.phone)
    }

    assignmarks(...args) {
        this.marks = args;
    }

    highestmarks() {
        var Marks = this.marks.sort((a,b) => a-b)
        return Marks[Marks.length-1];
    }

    totalsubjects() {
        return this.marks.length;
    }

    showMarks() {
        return this.marks;
    }

    average() {
        return this.marks.sort((a,b) => a-b)/this.totalsubjects();
    }

    low() {
        var Marks = this.marks.sort((a,b) => a-b);
        return Marks[0]
    }
}

var Student1 = new Student(name,email,phone);

