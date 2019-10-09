import React from 'react';
import { Container, Grid, Input, Button, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { patch } from '../redux/actions'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: ''
        }
    }

    handleChange = (event) => {
        console.log(this.state);
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.patch(this.state)
    }

    render() {
        return (
            <Container>
                <Header as='h1'>Patch</Header>
                <Grid>
                    <Grid.Column width={6}>
                        <Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            onChange={(event) => this.handleChange(event)} 
                            value={this.state.name} 
                            name='name'
                        />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input 
                            fluid 
                            icon='key' 
                            iconPosition='left' 
                            onChange={(event) => this.handleChange(event)} 
                            value={this.state.job} 
                            name='job'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button secondary onClick={(e) => this.handleSubmit(e)}>Patch</Button>
                    </Grid.Column>
                </Grid>
                {this.props.updatedAt ? (
                    <Message
                        success
                        header={`${this.props.updatedAt}`}
                    />
                ) : (<></>)}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        updatedAt: state.patchDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        patch: (query) => {
            console.log(query)
            dispatch(patch(query))
        }
    }
}

export  default connect(mapStateToProps, mapDispatchToProps)(Register);