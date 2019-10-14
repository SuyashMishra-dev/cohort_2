import { evaluate as myEval } from "mathjs";

export const evaluate = (operation) => {
    // const operators = ['+','-','/','='];
    // let newop = operation.split('');
    // let operationArr = []
    // let newEl = '';
    // for (let i = 0; i < newop.length; i++) {
    //     const element = newop[i];
    //     if (operators.includes(element)) {
    //         if (newEl == '') {
    //             newEl = newEl+element
    //         } else {
    //             operationArr.push(parseInt(newEl));
    //             operationArr.push(element);
    //             newEl = ''
    //         }
    //     } else {
    //         newEl = newEl + element;
    //     }
    // }
    // if(newEl!==''){
    //     operationArr.push(parseInt(newEl))
    // }

    // console.log(operation)

    return myEval(operation)    
    

}

export const deleteLast = (operation) => {

    let newOp = operation.split('');
    newOp.pop();

    return newOp.join('')

}