const insertAction= (data) =>(
    console.log(data),
    {
    type:"add",
    data
    }
)

const checkAction = (index) =>(
console.log(index),
    {
        type:"check",
        index

    }
)


const reducer = (state={saveditems:[]},action) =>{ 
    if(action.type === "add")
    {
        let obj={
            data1:action.data,
            isCheck:false
                }
            return {saveditems:[...state.saveditems,obj]};
    }
    if(action.type === "check")
    {
        let newmap=state.saveditems.map((elem,i)=>{
                if(action.index==i){
                        elem.isCheck = !elem.isCheck
                }
                return elem
        })
        console.log(newmap)
        return {saveditems:newmap}
    }
    return state;
}


export default reducer;
export {insertAction,checkAction}
