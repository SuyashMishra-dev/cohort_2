const ADD_PLAYER = "ADD_PLAYER"

const initState ={
    list:[],
    number:0
};

const reducer = (state = initState, action) =>{
    console.log("entered reducer");
    switch(action.type){ 
        case ADD_PLAYER:
         console.log("Add item called");
         let temp = {
             itemName: action.itemName,
             itemCountry: action.itemCountry,
             itemT20Score: action.itemT20Score,
             itemOdiScore: action.itemOdiScore,
             itemTestScore: action.itemTestScore,
         };
        return{
            ...state,
            list: [...state.list, temp]
        };
        default :
        console.log("default called", state)
    }
};

export default reducer;