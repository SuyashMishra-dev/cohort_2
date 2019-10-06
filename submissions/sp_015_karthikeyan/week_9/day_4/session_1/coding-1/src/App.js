import React from 'react';
import ToDoInput from './components/ToDoInput';
import ToDosList from './components/ToDosList';
import { connect } from 'react-redux';
import Total from './components/Total';

const App = (props) => {
    console.log('App Props', props.savedItems)
    return (
        <div>
            <h3>ToDo App</h3>
            <ToDoInput />
            <Total />
            <ToDosList />
        </div>
    )
}

export default connect(null, null)(App);