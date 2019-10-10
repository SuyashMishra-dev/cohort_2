import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { spacing } from '@material-ui/system';
const Todo = (props) => {
    return(
        <div>
            {props.data.map((ele,i) => {
            let decoration = '';
            if(ele.isFinished) {
                decoration = { textDecoration: 'line-through' }
            }
            else {
                decoration = { textDecoration: 'none' }
            }
            return(
                <div >
                    <List>
                        <ListItem  role={undefined} dense button key = {ele.name}>
                            <ListItemIcon>
                                <Checkbox 
                                    edge="start"
                                    onChange={(e) => props.changefunc(e, i)}
                                    checked={ele.isFinished}
                                />
                            </ListItemIcon> 
                            <ListItemText style = {decoration}>{ele.name}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton aria-label="delete">
                                <DeleteIcon fontSize="large"    
                                onClick={(e) => props.removefunc(e, i)}/>
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
                )})}   
        </div>
    )
}
export default Todo;