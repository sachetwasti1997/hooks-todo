import React,{useState} from "react";

const useInputState = (initialState = "") => {
    const [state, setState] = useState(initialState)

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const handleReset = () => {
        setState("")
    }

    const instantiate = (value) => {
        setState(value)
    }

    return [state, handleChange, handleReset, instantiate]

}

export default useInputState;