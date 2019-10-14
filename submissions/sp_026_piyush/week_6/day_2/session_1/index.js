class Todo {
    constructor(...todoItem) {
        this.todoItem = todoItem;
    }

    add(item) {
        this.todoItem = [...this.todoItem, {itemName: item, finished: false}];
        console.log(todo);

        var body = document.querySelector('body');
        var div = document.createElement('div');
        var temp = this.todoItem.map(element => `<div>${element.itemName}</div>`);
        div.innerHTML =(temp.reduce((a,b) => a+b));
        body.appendChild(div);

        // this.todoItem = [...this.todoItem, {itemName: item, finished: false}];
        // console.log(todo);

        // // var body = ;
        // var div = document.createElement('div');
        // var temp = this.todoItem.map(element => `<div>${element.itemName}</div>`);
        // // div.innerHTML = ;
        
        // document.getElementById('todo').innerHTML = temp.reduce((a,b) => a+b);

    }

    showAll() {
        console.log(this.todoItem.map(element => element.itemName  + ' ' + element.finished))
    }

    showUnfinished() {
        // console.log(this.todoItem.map(element => element.itemName  + ' ' + element.checked))
        console.log(this.todoItem.filter(element => element.finished === false).map(element => element.itemName))
    }
    
    
}

var todo = new Todo();