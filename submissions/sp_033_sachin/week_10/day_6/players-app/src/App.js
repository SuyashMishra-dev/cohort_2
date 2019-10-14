import React from 'react';

//routes
import { Route, Switch, Redirect } from "react-router-dom";

//material
import { Container } from "@material-ui/core";

//redux
import { connect } from "react-redux";
import { updatePlayersFromStorage } from "./redux/players/players.actions";
import HomePage from './pages/home';

class App extends React.Component {

  constructor (props) {
    super(props);

  }

  componentDidMount() {

    this.props.updatePlayers();

  }

  render() {

    return (
      <Container maxWidth='sm'>
        <Switch>
          {/* <Route /> */}
          <Route path='/home' component={HomePage} />
          
        </Switch>
      </Container>
    )

  }

}

const mapDispatchToProps = dispatch =>({
  updatePlayers : () => dispatch(updatePlayersFromStorage()),

})

export default connect(null,mapDispatchToProps)(App);
