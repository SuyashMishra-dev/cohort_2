import { createstore } from 'redux'

const INC_COUNTER ='INC_COUNTER';
const DEC_COUNTER ='DEC_COUNTER';
const INC_COUNTEREVEN = 'INC_COUNTEREVEN';
const INC_COUNTERODD = 'INC_COUNTERODD';
const INC_COUNTERMUL = 'INC_COUNTERMUL';
const INC_COUNTERDIV = 'INC_COUNTERDIV';

const INC_COUNTERX = (amount) =>{
    return{
        type :INC_COUNTER,
        amount
    }
}

const DEC_COUNTERX = (amount)=> {
 return{  
       type : DEC_COUNTER,
       amount
    }
}

const INC_COUNTERXODD = (amount)=> {
    return{  
          type : INC_COUNTERODD,
          amount
       }
   }

const INC_COUNTERXEVEN = (amount)=> {
    return{  
          type : INC_COUNTEREVEN,
          amount
       }
   }

const INC_COUNTERXMUL = (amount)=> {
    return{  
          type : INC_COUNTERMUL,
          amount
       }
   }  
   
const INC_COUNTERXDIV = (amount)=> {
    return{  
          type : INC_COUNTERDIV,
          amount
       }
   }
export{ INC_COUNTERX,DEC_COUNTERX,INC_COUNTERXODD,INC_COUNTERXEVEN,INC_COUNTERXMUL,INC_COUNTERXDIV};