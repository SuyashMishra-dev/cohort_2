import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login'

//redux
import { connect } from "react-redux";
import UserDashboard from './pages/user.dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render(){ 
    const {currentUser} = this.props;
    return(
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' render={()=>currentUser?(<Redirect to='/dashboard' />):<Login />} />
        <Route exact path='/dashboard' render={()=>currentUser?<UserDashboard />:(<Redirect to='/login' />)} />
      </Switch>
    </>
  )
  }
}

const mapStateToProps = ({user : {currentUser}}) => ({
  currentUser
})

export default connect(mapStateToProps)(App);
