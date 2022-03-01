import React, { useState, useContext } from "react";
import { Button, TextField } from '@material-ui/core';
import FormValidation from "../../contexts/FormValidation";
import useError from "../../hooks/useError";


function UserData({ whenSend }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const validation = useContext(FormValidation)
    const [error, toValidFields, canISend] = useError(validation)

   
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (canISend()) {
                whenSend({ email, password });
            }
        }}>

            <TextField
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                name="email"
                id="email"
                type="email"
                label="E-mail"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                onBlur={toValidFields}
                error={!error.password.valid}
                helperText={error.password.text}
                name="password"
                id="password"
                type="password"
                label="Password"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Button
                type="next"
                variant="contained"
                color="primary">
                Next
            </Button>
        </form>
    )

}

export default UserData