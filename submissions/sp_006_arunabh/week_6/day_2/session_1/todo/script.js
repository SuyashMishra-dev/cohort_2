var showAllButton = document.getElementById('showAll');
var showIncompleteButton = document.getElementById('showIncomplete');
var todoItems = document.getElementById('todoItems');
var cross = document.getElementById('cross');
var ul = document.querySelector('ul');

var todoArray = [];
var count = 0;

class Todo {
    constructor(id, item, completed = false) {
        this.id = id,
        this.item = item,
        this.completed = completed
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

addItem = () => {
    let inputItem = document.getElementById('inputItem').value;
    if(inputItem == '') {
        alert('Input is Empty!')
    }
    else{
        let newItem = new Todo(count, inputItem);
        todoArray = [...todoArray, newItem];
        document.getElementById('inputItem').value = '';
        count++;
        // console.log(todoArray)
        displayTodo(todoArray);
    }
}

displayTodo = (arr) => {
    ul.innerHTML = '';
    arr.forEach(el => {
        var li = document.createElement('li');
        // li.setAttribute('id', `${count}`)
        li.textContent = el.item;
        li.setAttribute('onclick', `completeItem(${el.id})`);
        if(el.completed == true) {
            li.setAttribute('class', 'strike');
        }
        // var cross = document.createElement('button');
        // cross.textContent='x';
        // li.appendChild(cross);
        ul.appendChild(li);
        // count++;
    })
}

completeItem = (id) => {
   todoArray[id].toggleCompleted();
//    console.log(todoArray)
   displayTodo(todoArray);
}


showAllButton.addEventListener('click' , () => {
    ul.innerHTML = '';
    todoArray.forEach(el => {
        var li = document.createElement('li');
        li.textContent = el.item;
        li.setAttribute('onclick', `completeItem(${el.id})`);
        if(el.completed == true) {
            li.setAttribute('class', 'strike');
        }
        ul.appendChild(li);
    });
})

showIncompleteButton.addEventListener('click', () => {
    ul.innerHTML = '';
    todoArray.forEach(el => {
        if(el.completed === false) {
            var li = document.createElement('li');
            li.textContent = el.item;
            ul.appendChild(li);
        }
    });
})