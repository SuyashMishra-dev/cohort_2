var taskArr = []
class toDoTask{
    constructor (taskName) {
        this.taskName = taskName;
    }
}

var field = document.getElementById('numberItem').value;
var showPageParent = document.querySelector('ul');
var onclickable = document.getElementById('generateAdd');
onclickable.addEventListener('click' ,function () {
    var field = document.getElementById('numberItem').value;
    /*console.log(field)*/
    var task1 = new toDoTask(field);
    /*console.log(task1)*/
    taskArr.push(task1)
    console.log(taskArr)
    var showPage = document.createElement('li');        
    showPage.innerHTML = field
    showPageParent.appendChild(showPage);
    showPage.setAttribute('class' , 'text-info')
    showPage.style.listStyle = "none";
    var del = document.createElement('button');
       var delParent = document.querySelector('ul');
       delParent.appendChild(del);
       del.innerHTML = 'Delete' + " " + field;
       del.setAttribute('id' , field);
    //    var val = document.getElementById(field).innerHTML;
    //    console.log(val)
    var clickToDelete = document.getElementById(field);
clickToDelete.addEventListener('click' , function () {
    clickToDelete.remove();
    showPage.innerHTML = "";
})
})

var showTask = document.getElementById('generateToBeDone');
var showPParent = document.getElementById('show');
showTask.addEventListener('click' , function () {
    var show = document.querySelectorAll('li');
    for(var i = 0; i < show.length; i++) {
        var showP = document.createElement('p');
        showP.innerHTML = show[i].innerHTML;
        showP.setAttribute('class' , 'text-info');
        showPParent.appendChild(showP)
    }
})



var showAll = document.getElementById('generateShowAll');
var headingParent = document.getElementById('headingShow')

showAll.addEventListener('click' , function() {
    var heading =document.createElement('p')
    heading.innerHTML = "All List Of Items"
    headingParent.appendChild(heading)
    heading.setAttribute('class' , "text-danger")
    /*showPage.removeChild(showPageParent)*/
    // taskArr.map((item) => {
    //     var showPage = document.createElement('li');        
    //     showPage.innerHTML = taskArr[i].taskName
    //     showPageParent.appendChild(showPage);
    //     showPage.setAttribute('class' , 'text-info')
    //     showPage.style.listStyle = "none";
    // })
    for(var i = 0; i < taskArr.length; i++) {
      
        var showPage = document.createElement('li');        
        showPage.innerHTML = taskArr[i].taskName
        showPageParent.appendChild(showPage);
        showPage.setAttribute('class' , 'text-info')
        showPage.style.listStyle = "none";
       /* console.log(taskArr)*/
       
    }
})

