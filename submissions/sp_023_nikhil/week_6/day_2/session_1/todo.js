var add = document.querySelector("#add");
add.addEventListener('click', addTodo);
var list = document.querySelector("#list");
var todoArr = [];

class Todolist{
    constructor(todoTask, done){
        this.todoTask = todoTask;
        this.done = done;
    }
} 
var removeTask = document.createElement("button");
var task = document.createElement("li");

function addTodo() {
    var addTask = document.querySelector("#addTask");
    var todoName = addTask.value
    task.textContent = addTask.value;
    list.appendChild(task)
    todoArr.push(task)
    addTask.value = " "
    removeTask.textContent = "Remove To-Do"
    task.appendChild(removeTask)
    var newTask = new Todolist(todoName, false);
    console.log(newTask) 
    return task,removeTask
}

removeTask.addEventListener('click', rmv);

function rmv() {
    list.removeChild(task)
}