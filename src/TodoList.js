import React from "react";
import Paper from "@material-ui/core/Paper";
import {Container, List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TodoItem from "./TodoItems";

const TodoList = (props) => {
    return(
            <Paper style={{marginTop: '10px'}}>
                <List>
                    {props.todos.map(todo => (
                            <Container key={todo.id}>
                                <TodoItem
                                    id={todo.id}
                                    task={todo.task}
                                    completed={todo.completed}
                                    removeToDo={props.removeToDo}
                                    toggleToDo={props.toggleToDo}
                                    editToDo={props.editToDo}
                                />
                                <Divider/>
                            </Container>
                        )
                    )}
                </List>
            </Paper>
    )
}

export default TodoList;