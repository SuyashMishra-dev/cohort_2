import React from 'react';

import { connect } from 'react-redux';
import { checkItem } from '../redux/todoStore';

const ToDosList = props => {
    console.log("handlecheck should be", props);
    return (
        <div>
            {props.savedItems ? (
                props.savedItems.map((ele, i) => {
                    let decor;
                    console.log(ele, i)
                    if(ele.isChecked) {
                        decor = { textDecoration: 'line-through'}
                    }
                    else decor = { textDecoration: 'none' }
                    return (
                        <div>
                            <li key={i} style={decor}>{ele.item}</li>
                            <input type='checkbox' onChange={() => props.handleCheck(i)} checked={ele.isChecked}></input>
                        </div>
                    )
                })
            ) : (<p>This is the list</p>)}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return ({
        handleCheck: (index) => {
            dispatch(checkItem(index))
        }
    })
}

const mapStateToProps = state => {
    console.log('mapState for todo List called',state)
    return ({
        savedItems: state.savedItems
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDosList);