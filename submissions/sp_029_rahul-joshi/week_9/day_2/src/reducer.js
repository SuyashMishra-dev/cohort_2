const INC_COUNTER = "INC_COUNTER"
const DEC_COUNTER = "DEC_COUNTER"
const EVEN_ODD= "EVEN_ODD"
const MUL = "MUL"
const DIV = "DIV"



const initialState = {
	count: 0
}


const counter = (state=initialState, action) => {
	// console.log('enterred the counter reducer')
      switch(action.type){
           case INC_COUNTER:
             	return {

             		   count: state.count + action.amount

             	}
           case DEC_COUNTER:
           		return {
           			   count: state.count - action.amount
           		}
           	case EVEN_ODD:
           	    if(state.count % 2 !== 0 ){
           	    	console.log("if odd")
           	    	return {
           			    count: state.count + action.amount + 1

           		}
           	    }else if(state.count % 2 === 0) {
           			 console.log("iff even")
                     return {
                         count: state.count + action.amount + 2
                     }
           		}
           		break;
           	case MUL:
           	    
           	    	return {
           	    		count: state.count  *  action.amount
           	    	}
           	 case DIV:

           	        return {
           	        	count: state.count / action.amount
           	        }
           	    
           	
           		
           	default:
           		return state;

           }


}

export default counter 