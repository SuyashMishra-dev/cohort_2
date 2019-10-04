const addItem = (val) => ({type: "ADD",val});
const setVal = (inp) => ({type:"SET",inp});
const getVal =() =>({type:"GET"});
const handCheck = (id,val)=>({type:"HCHK"})
const initialState ={
    item:[],
    input:'',
    num:0,
    checkStatus:false,

}
const reducer = (state = initialState ,action) =>{
    console.log(action)
    console.log(state.item)
    if(action.type==="ADD"){
        console.log("adding value",action.val,state,state.item);
        return {
            input:state.input,
            num:state.num,
            checkStatus:state.checkStatus,
            item: [...state.item,{"value":action.val,"status":state.checkStatus}],
        }
       
    }
    if(action.type==="SET"){
        console.log("seting value",action.val);
       return{
         input:action.inp,
         item:state.item,
         num:state.num,
         checkStatus:state.checkStatus
       }
    }
    if(action.type==="HCHK"){
        console.log("cheking handle");
        return{
            num:state.num,
            checkStatus:!state.checkStatus,
          
        }
    }
    if(action.type==="GET"){
        return {
            num:state.input,
            input:state.input,
            item:state.item
        }
    }
    return state;
};
export default reducer;
export {addItem,setVal,getVal,handCheck};