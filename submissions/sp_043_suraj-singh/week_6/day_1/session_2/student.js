class Student{
    constructor(name, email, phone){
    this.name=name;
    this.email=email;
    this.phone=phone;
    }
    
    assignMarks(...marks){
        this.marks=marks;
    }

    highestMarks(){
        var hMark = this.marks.sort((a,b)=>a-b);
        return (hMark[hMark.length-1]);
    }

    totalSubjects(){
        return this.marks.length;   
    }

    average(){
        return this.marks;
    }

    low() {
        var hMark =this.marks.sort((a,b)=>a-b);
        return (hMark[0]);
    }
}