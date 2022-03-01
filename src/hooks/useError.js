import React, { useState } from "react";

function useError(validation) {
    const initialState = createInitialState(validation)
    const [error, setError] = useState(initialState);

    function toValidFields(e) {
        const { name, value } = e.target
        const newState = { ...error }
        newState[name] = validation[name](value)
        setError(newState)
    }

    function canISend() {
        for (let field in error) {
            if (!error[field].valid) {
                return false
            }
        } 
        return true
    }

    return [error, toValidFields, canISend]
}

function createInitialState(validation) {
    const initialState = []
    for (let field in validation) {
        initialState[field] = { valid: true, text:"" }
    }
    return initialState
}

export default useError