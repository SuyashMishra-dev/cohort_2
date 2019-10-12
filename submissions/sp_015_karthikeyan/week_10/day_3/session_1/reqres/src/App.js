import React from 'react';

import { Container, Divider } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Users from './pages/Users';
import Patch from './pages/Patch';

const App = () => {
    return (
        <Container>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/users'>Users</Link>
            <Link to='/patch'>Patch</Link>
            <Divider></Divider>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/users' component={Users} />
            <Route path='/patch' component={Patch} />
        </Container>
    )
}

export default App;