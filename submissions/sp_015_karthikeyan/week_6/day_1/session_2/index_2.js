class Student {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    assignMarks(...marks) {
        this.marks = marks;
    }
    highestMarks() {    
        var sortedMarks = this.marks.sort((a,b) => a-b);
        return (sortedMarks[sortedMarks.length -1]);
    }
    totalSubjects() {
        return this.marks.length;
    }
    showMarks() {
        return this.marks;
    }
    average() {
        return((this.marks.sort((a,b) => a+b))/this.totalSubjects());
    }
    low() {
        var sortedMarks = this.marks.sort((a,b) => a-b);
        return (sortedMarks[0]);
    }
}