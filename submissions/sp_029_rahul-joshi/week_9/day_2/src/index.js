import ReactDOM from "react-dom";
import React from "react";
import { createStore } from 'redux';

import { incrementCounter, decrementCounter, even_odd, multiply, divide} from './action'
import counter from './reducer'


// console.log(counter)
const store = createStore(counter);
// console.log(incrementCounter(1));

// console.log(store.getState());

function App(){

	return (

         <div>
        
          Count:{store.getState().count}
          <br />
          <input id="num"></input>
          <br />

          <button onClick={() => store.dispatch(incrementCounter(Number(document.getElementById("num").value)))}>
          Increment By x
          </button>
          <br />

          <button onClick={() => store.dispatch(decrementCounter(Number(document.getElementById("num").value)))}>	
          Decrement By x
          </button>
          <br />
          
          <button onClick={() => store.dispatch(even_odd(Number(document.getElementById("num").value)))}>
          increment even_odd
          </button>
          <br />

          

          <button onClick={() => store.dispatch(multiply(Number(document.getElementById("num").value)))}>
          Multiply count by x
          </button>
          <br />

           <button onClick={() => store.dispatch(divide(Number(document.getElementById("num").value)))}>
          Divide count by x
          </button>
          <br />






        


         </div>

		)
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);