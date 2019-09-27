import React from 'react';
import { List, ListItem, ListItemIcon,ListItemText,ListItemSecondaryAction, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'

const MaterialTodo = (props) => {

    if(props.todos.length===0){
        return null
    }

    return (
        <>  <Paper>
            <List style={{width:"400px"}}>
                {props.todos.map((todo,i)=>{
                    
                    return (
                        
                        <ListItem key={i+"#"}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={todo.done}
                                    index={i}
                                    onChange={(e)=>props.changeCheck(i)}                                
                                    inputProps={{
                                    'aria-label': 'primary checkbox',
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={i} primary={todo.value} style={{textDecoration:`${todo.done?'line-through':'none'}`}} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments">
                                    {/* <CommentIcon /> */}
                                    <DeleteIcon onClick={(e)=>props.remove(i)} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
            </List>
            </Paper>
        </>
    )
}

export default MaterialTodo;

// value="checkedA"