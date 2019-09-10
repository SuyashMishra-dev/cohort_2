let todos = [];

class Todo {
    constructor(title){
        this.title = title;
        this.completed = false;
    }

    changeStatus(){
        this.completed = !this.completed;
    }
}

const addTodo = () => {
    let todoInput = document.getElementById('todoInput').value;
    let newTodo = new Todo(todoInput);
    todos.push(newTodo);
    //display
    displayTodos(todos);
    return 1;
}

const displayTodos = (arr) => {
    let displayContainer = document.getElementById('displayContainer');
    displayContainer.innerHTML = '';
    arr.forEach((element,i)=> {
        let displayEl = document.createElement('div');
        if (element.completed) {
            let innerEl = document.createElement('s');
            innerEl.textContent = element.title
            displayEl.appendChild(innerEl);
            
        } else {
            let innerEl = document.createElement('span');
            innerEl.textContent = element.title
            displayEl.appendChild(innerEl);
            
        }
        displayEl.setAttribute('onclick','changeTodoStatus('+i+')');
        displayEl.style.color = 'green';
        let btn = document.createElement('button');
        btn.textContent = 'Remove Element';
        btn.setAttribute('onclick','removeTodo('+i+')');
        displayContainer.appendChild(displayEl);
        displayContainer.appendChild(btn);
    });
    return 1;
}

const changeTodoStatus= (index) => {
    todos[index].changeStatus();
    displayTodos(todos);
}

const removeTodo = (index) => {
    todos = todos.filter((el,i)=>i!=index);
    displayTodos(todos);
}

const showIncomplete = ()=> {
    displayTodos(todos.filter(el=>el.completed==false));
}