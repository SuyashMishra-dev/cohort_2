
import { ADD_PLAYER,} from '../actions/action-types/player-actions'

  const initState = {
     scores: [
               {id:1,Name:'Alan Border', twenty:1897,odi:2567,Testscore:2435},
               {id:2,Name:'Rahul Dravid', twenty:1897,odi:1342,Testscore:4600},
               {id:1,Name:'Tendulkar Sachin', twenty:347,odi:1765,Testscore:5687},
               {id:1,Name:'Dravid Rahul', twenty:324,odi:3456,Testscore:3345},
               {id:1,Name:'Rajesh', twenty:1345,odi:4567,Testscore:6754},
               {id:1,Name:'Ashwin', twenty:2765,odi:6231,Testscore:8723},
               {id:1,Name:'Kumaranga', twenty:3452,odi:3854,Testscore:3456},
  ],
   
   addedScores:[],
    total: 0
  }
const playerReducer=(state = initState,action)=>{
   
    
    if(action.type === ADD_PLAYER){
          let addedScore = state.scores.find(score=> score.id === action.id)
         
         let existed_score= state.addedScores.find(score=> action.id === score.id)
         if(existed_score)
         {
            addedScore.runs += 1 
             return{
                ...state,
                 total: state.total + addedScore.price 
                  }
        }
         else{
            addedScore.runs = 1;
            //calculating the total
            let newTotal = state.total + addedScore.price 
            
            return{
                ...state,
                addedScores: [...state.addedScores, addedScore],
                total : newTotal
            }
            
        }
    }

    else{
    return state
  }
    
}
export default playerReducer

