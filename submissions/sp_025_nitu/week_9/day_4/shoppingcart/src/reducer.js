import {CART_ADD} from "./action_type.js"

const initial ={
    items : [
        {
            id:1,
            ImangeUrl:"https://i.pinimg.com/originals/b5/df/7c/b5df7c3f59cfc4508ab53ce31cfffe71.jpg",
            Name:"Black forest",
            cost:2000
        },

        {
            id:2,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },

        {
            id:3,
            ImangeUrl:"https://i.pinimg.com/originals/b5/df/7c/b5df7c3f59cfc4508ab53ce31cfffe71.jpg",
            Name:"Black forest",
            cost:2000
        },

        {
            id:4,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:5,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:6,
            ImangeUrl:"https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/11/black-forest-cake-chocolate-ganache.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:7,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:8,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:9,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:10,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:11,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        },
        {
            id:12,
            ImangeUrl:"https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
            Name:"Black forest",
            cost:2000
        }

    ],  
  addedItems:[],
  total:0
  
}
const reducer =(state=initial,action) =>{
    if (action.type === CART_ADD) {
        let addedItem = state.items.find(item=> item.id === action.id);  
        if(addedItem){
                    addedItem.quantity = 1;
                    let newTotal = state.total + addedItem.price 
                    
                    return{
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total : newTotal
                        
                    } 
                }
               
            }
            
            
        return state
    
   
}

export default reducer;
