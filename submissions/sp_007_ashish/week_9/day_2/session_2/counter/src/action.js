const INC_COUNTER = "INC_COUNTER";
const ADD_VAL ="ADD_VAL";
const DEC_COUNTER = "DEC_COUNTER";
const TAKE_VAL ="TAKE_VAL";
const CON_ONE="CON_ONE";
const MUL_COUNTER ="MUL_COUNTER";
const DIV_COUNTER ="DIV_COUNTER";
const REM_COUNTER ="REM_COUNTER";
const addVal = val =>{
    console.log('inside action',val)
     return{
        type:ADD_VAL,
        val
     };
 };
const incrementCounter = amount => {
    return {
      type: INC_COUNTER,
      amount
    };
  };
  
const decrementCounter = amount => {
    return {
      type: DEC_COUNTER,
      amount
    };
  };
const takeval = unit =>{
    console.log("in unit"+unit)
    return{
        type:TAKE_VAL,
        unit
    };
  };
  const oddInc = amount =>{
      
      return{
          type:CON_ONE,
          amount
      };
}; 
const divVal = amount =>{
      
  return{
      type:DIV_COUNTER,
      amount
  };
}; 
const remVal = amount =>{
      
  return{
      type:REM_COUNTER,
      amount
  };
}; 
const multiplyCounter = amount => {
  return {
    type: MUL_COUNTER,
    amount
  };
};
export { incrementCounter,decrementCounter,addVal,takeval,oddInc,multiplyCounter,divVal,remVal}
