import React, {useEffect} from "react";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const TextForm = ({value, editToDo, addToDo}) => {

    const [valueProp, handleChange, reset, initialValue] = useInputState()

    let submitObj;

    console.log("todoform called")

    useEffect(() => {
        if (addToDo) {
            submitObj = e => {
                e.preventDefault();
                addToDo(valueProp);
                reset();
            }
        } else {
            initialValue(value)
            submitObj = e => {
                e.preventDefault();
                editToDo(valueProp);
                reset();
            }
            console.log("Edit ToDo called")
        }
    });

    console.log(valueProp)

    return(
            <Paper>
                <form
                    onSubmit={submitObj}
                >
                    <TextField defaultValue={value} onChange={handleChange} label={"Add A Task"} fullWidth/>
                </form>
            </Paper>
    )

}

export default TextForm;