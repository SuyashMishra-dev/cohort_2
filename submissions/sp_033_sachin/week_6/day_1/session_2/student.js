

class Student {
    constructor(name,email,phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    assignMarks(...marks){
        this.marks = marks;
    }

    highestMarks(){
        return this.marks.sort((a,b)=>a-b)[this.marks.length-1];
    }

    totalSubjects(){
        return this.marks.length;
    }

    showMarks(){
        return this.marks;
    }

    average(){
        return this.marks.reduce((acc,mark)=>{return acc+mark},0)/this.totalSubjects();
    }

    lowestMarks(){
        return this.marks.sort((a,b)=>a-b)[0];
    }
}