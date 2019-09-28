import React from 'react';
import { ListItem, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) => {
    return (
        <>
            {props.data.map((ele, i) => {
                let decor = '';
                if(ele.isCompleted) {
                    decor = {textDecoration: 'line-through'}
                }
                else decor = {textDecoration: 'none'}
                return (
                    <ListItem key={ele.item} role={undefined} dense button onChange={(e) => props.changeFunc(e, i)} key={i}>
                        <ListItemIcon>
                            <Checkbox edge='start' checked={ele.isCompleted} />
                        </ListItemIcon>
                        <ListItemText primary={ele.item} style={decor} />
                        <ListItemSecondaryAction onClick={(e) => {props.removeFunc(e,i)}} key={i} >
                            <IconButton edge='end'>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })}    
        </>
    )
}

export default TodoItem;