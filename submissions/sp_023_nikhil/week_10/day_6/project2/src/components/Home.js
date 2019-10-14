import React from 'react'
import { Link, Route } from 'react-router-dom';
import Form from './From' 
import Show from './Show'

class Home extends React.Component{
    render() {
        return(
            <>
                <Link to="/create">Create Player</Link>
                <Link to="/show">Show Players</Link>
                
                <Route path="/create" render={() => <Form  /> } />
                <Route path="/show" render={() => <Show /> } />
            </>
        )
    }
}

export default Home