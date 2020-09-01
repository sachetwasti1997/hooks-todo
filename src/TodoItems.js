import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {Edit} from "@material-ui/icons";
import useInputState from "./hooks/useInputState";

const TodoItem = ({ id, task, completed, removeToDo, toggleToDo, editToDo }) => {

    return(
        <ListItem>
            <Checkbox checked={completed} onClick={() => toggleToDo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through": "none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label={'Delete'} onClick={() => {removeToDo(id)}}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton aria-label={'Edit'} onClick={() => {editToDo(id)}}>
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )

}
export default TodoItem;