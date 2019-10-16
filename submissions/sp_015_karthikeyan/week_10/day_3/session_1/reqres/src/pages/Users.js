import React from 'react';
import Axios from 'axios';
import { Container, Grid } from 'semantic-ui-react';
import UserCard from '../components/UserCard';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Axios.get('https://reqres.in/api/users')
             .then(response => this.setState({users: response.data.data}));
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        {this.state.users.map(ele => <UserCard data={ele} key={ele.id} />)}
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default Users;