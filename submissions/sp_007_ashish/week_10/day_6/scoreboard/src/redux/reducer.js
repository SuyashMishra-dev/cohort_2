import {
    STORE_DATA,
    SHOW_FROM,
    ADD_ITEM,
    SHOW_DATA,
    DISPLAY_PLAY
}from "./action";


const initialState={
    input:'',
    operand1:[],
    operand2:[],
    operator:[],
    output:0,
    history:[],
    show:0,
    
    playersDetails:[
        
            {player: "ashish", country: "india", t20: "23", odi: "22", testscore: "223"}
        
    ],
    player:'',
    country:'',
    t20:'',
    odi:'',
    testscore:'',
    showindex:0
}
const reducer =(state =initialState,action)=>{
    console.log("reducer is working")
    switch(action.type){
        case SHOW_FROM:{
          
                console.log("showform called");
              return{
                  show:state.show+1,
                  playersDetails:state.playersDetails,
                  showindex:state.showindex,
            }
        }
        case SHOW_DATA:{
            console.log("show data clicked",action.data)
            return{
                show:state.show+2,
                playersDetails:state.playersDetails,
            }
        }
        case ADD_ITEM:{
            console.log("getting data"+action.data.player);
            let temp={
                player:action.data.player,
                country:action.data.country,
                t20:action.data.t20,
                odi:action.data.odi,
                testscore:action.data.testscore
              }
            return{
                playersDetails:[...state.playersDetails,temp],
                show:state.show-1,
                showindex:state.showindex,
            }
        }
        case  DISPLAY_PLAY:{
            console.log("going for display" +action.data);
            return{
                show:state.show+1,
                playersDetails:state.playersDetails,
                showindex:action.data,
            }
        }
        
            default:
                return state;
    }
}
export default reducer;