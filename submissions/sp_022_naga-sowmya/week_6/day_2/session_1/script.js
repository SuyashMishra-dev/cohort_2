class todo {
    constructor(milks, eggs, bread, pay_electricity_bill){
        this.milks = milks;
        this.eggs = eggs;
        this.bread = bread;
        this.pay_electricity_bill = pay_electricity_bill;
    }
}

function show_items() {
    /* var my_todo = new todo('aawin', 'egg', 'britannia', 'pay');
        console.log(my_todo.milks);
        console.log(my_todo.eggs);
        console.log(my_todo.bread);
        console.log(my_todo.pay_electricity_bill); */

        var input = document.getElementById('input').value;
        document.getElementById('para').innerHTML = input;
        
    };

