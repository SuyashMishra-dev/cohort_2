import React from 'react';
import UsersListPage from './pages/users-list'
import PrivateRoute from "./Private";

import { connect } from "react-redux";

import Login from './pages/login'
import UserDashboard from './pages/user-dashboard'
//redux
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterPage from './pages/register';

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <>
        <Switch>
          <Route exact path='/' render={()=><>hi</>} />
          <Route exact path='/users-list' component={()=><UsersListPage />} />
          <Route exact path='/register' component={()=><RegisterPage />} />
          <Route exact path='/login' component={()=><Login />} />

          <PrivateRoute isLoggedIn={this.props.loggedIn} path="/user-dashboard">
            <UserDashboard />
          </PrivateRoute>

        </Switch>
      </>
    )
  }

}

const mapStateToProps = ({login : {loggedIn}}) => ({
  loggedIn
})

export default connect(mapStateToProps)(App);
