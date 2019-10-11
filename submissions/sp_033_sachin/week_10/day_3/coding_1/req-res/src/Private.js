import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, isLoggedIn,...rest }) {
    // console.log(isLoggedIn)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;