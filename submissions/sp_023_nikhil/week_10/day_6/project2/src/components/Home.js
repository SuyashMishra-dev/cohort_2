import React from 'react'
import { Link, Route } from 'react-router-dom';
import Form from './From' 
import Show from './Show'
import Button from '@material-ui/core/Button';

class Home extends React.Component{
    render() {
        return(
            <>
                <div style={{marginLeft:"700px"}} >
                <Link to="/create"><Button>Create Player</Button></Link>
                <Link to="/show"><Button style={{marginLeft:"20px"}}>Show Players</Button></Link>
                
                <Route path="/create" render={() => <Form  /> } />
                <Route path="/show" render={() => <Show /> } />
                </div>
            </>
        )
    }
}

export default Home