import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {v1 as uuid} from 'uuid';

const TodoApp = () => {

    const initialTodos = [
        {id: 1, task: 'Clean FishTank', completed: false},
        {id: 2, task: 'Wash Car', completed: true},
        {id: 3, task: 'Grow Beard', completed: false}
    ]

    const [todos, setTodos] = useState(initialTodos);
    const [editTodo, setEditTodo] = useState(false);
    const [editText, setEditText] = useState("");

    const addToDo = (newToDoTask) => {
        setTodos([...todos, {id: uuid(), task: newToDoTask, completed: false}])
    }

    const removeToDo = (itemId) => {
        let temp = todos.filter( todo => todo.id !== itemId )
        setTodos(temp)
    }

    const toggleToDo = (todoId) => {
        const updateToDo = todos.map(todo =>
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updateToDo)
    }

    const editToDo = (todoId) => {
        todos.forEach((todo) => {
            if (todo.id === todoId){
                setEditTodo(true);
                setEditText(todo.task);
                console.log(todo.task)
            }
        })
    }

    return(
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color={'primary'} position={'static'} style={{height:'54px', marginBottom: '10px'}}>
                <Toolbar>
                    <Typography color={'inherit'}>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify={"center"} style={{marginTop: '10px'}}>
                <Grid item xs={11} md={8} lg={8}>
                    {editTodo? <TodoForm value={editText}/>:<TodoForm addToDo={addToDo} />}
                    <TodoList todos={todos} removeToDo={removeToDo} editToDo={editToDo} toggleToDo={toggleToDo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;