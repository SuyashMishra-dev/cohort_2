import React from 'react';

import { Container, Grid, TextField, Button, Divider, List } from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';

import TodoItems from './components/TodoItems'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            savedItems: [],
            value: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let todoItem = {item: this.state.value, isCompleted: false};
        this.setState({
            savedItems: [...this.state.savedItems, todoItem],
            value: ''
        });
    }

    changeCompletedStatus = (id) => {
        let temp = this.state.savedItems.filter((ele, i) => {
            if(id == i) {
                ele.isCompleted = !ele.isCompleted;
            }
            return ele;
        });
        this.setState({savedItems: temp});
    }

    removeToDoItem = (id) => {
        let temp = this.state.savedItems.filter((ele, i) => i != id);
        this.setState({savedItems: temp});
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={3} justify='center' alignItems='center'>
                        <Grid item md={3}>
                            <TextField id='outlined-name' label='Enter ToDo Item' margin='normal' variant='outlined' value={this.state.value} onChange={this.handleChange} />
                        </Grid>
                        <Grid item md={1}>
                            <Button variant='contained' color='primary' size='large' style={{marginTop: '5px'}} type='submit'>
                                Save
                                <SaveIcon style={{marginLeft: '8px'}} />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Divider style={{marginTop: '30px'}} />
                <Grid container justify='center' alignItems='center'>
                    <Grid item md={4}>
                        <List>
                            <TodoItems data={this.state.savedItems} changeFunc={(e,i) => {this.changeCompletedStatus(i)}} removeFunc={(e,i) => this.removeToDoItem(i)} />
                        </List>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}