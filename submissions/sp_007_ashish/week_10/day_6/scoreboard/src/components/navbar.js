import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Home from './home';
import { connect } from "react-redux";


class NavBar extends React.Component{
    constructor(props){
     super(props);{

     }
    }
    
    render(){
       
        return(
            <div>
                 <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <div className="container">
                    <Link to="/" class="navbar-brand">Score Board</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                             <Link to ="/" className="nav-link">Home</Link>
                        </li>
                       
                        </ul>
                    </div>
                    </div>
               </nav>

               <Switch>
                        <Route path="/" exact component={Home} />
                       
             </Switch>
            </div>
        );
    }
}
const mapStateToProps =state =>{
    console.log('map state',state)
    return {
       value:state.foodapp,
    };
};
export default connect(
    mapStateToProps,
)(NavBar);
