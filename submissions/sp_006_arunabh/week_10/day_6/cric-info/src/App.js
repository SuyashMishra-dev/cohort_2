import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Home from'./Home';
import PlayerForm from './components/PlayerForm';
import Show from './components/Show'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter className="d-flex">
                <React.Fragment>
                    <Link to = "/" style={{margin:"15%"}}>Home</Link>
                    <Link to = "/components/PlayerForm" style={{margin:"12%"}}>Create Player Profile</Link>
                    <Link to = "/components/Show" style={{margin:"12%"}}>Show</Link>
                    <Route path="/" exact component={Home} />
                    <Route path = "/components/PlayerForm" component={PlayerForm}/>
                    <Route path = "/components/Show" component={Show}/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;