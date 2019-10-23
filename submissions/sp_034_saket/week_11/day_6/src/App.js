import React from 'react';
import './App.css';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
// import Home from './component/home';
// import paras from './component/Paras'
import Myname from './component/Paras';


function App() {
 return(
   <div class="button">
    <h3 class="head">Details of the countries</h3>
     <div>
      <a class="waves-effect waves-light btn">Get All Deatails </a>
     </div>
     <div>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix"></i>
            <textarea id="icon_prefix2" class="materialize-textarea"
            // onClick={handleClick}
            ></textarea>
          <label for="icon_prefix2">country Details</label>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action"
        // onSubmit={(e)=>this.onSubmit(e)}
        >Submit
          <i class="material-icons right">>></i>
        </button>
      </div>
    </form>
  </div>
     <Myname />
   </div>
 )
}
function onSubmit(e){
  e.preventDefault();
 // console.log(clicked);
}
function onClick(e){
  e.preventDefault();
  //console.log(clicked);
}
 

export default App;
