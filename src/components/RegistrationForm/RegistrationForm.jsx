import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


function RegistrationForm({whenSend, validCPF}) {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotion, setPromotion] = useState(true);
    const [news, setNews] = useState(true);
    const [error, setError] = useState({cpf:{valid:true, text:""}});

    return (
        <form
            onSubmit={(e) => {
                whenSend({name, lastname, cpf, promotion, news})
                e.preventDefault();
            }}>

            <TextField
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={lastname}
                onChange={(e) =>
                    setLastname(e.target.value)}
                id="lastname"
                label="Last name"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value)
                }}

                onBlur={(e) => {
                    const isValid = validCPF(cpf);
                    setError({cpf:isValid})
                }}

                error={!error.cpf.valid}
                helperText={error.cpf.text}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promotion"
                control={<Switch
                    checked={promotion}
                    onChange={(e) => {
                        setPromotion(e.target.checked)
                    }}
                    name="promotion"
                    color="primary" />}
            />

            <FormControlLabel
                label="News"
                control={<Switch
                    checked={news}
                    onChange={(e) => {
                        setNews(e.target.checked)
                    }}
                    name="news"
                    color="primary" />}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Register
            </Button>
        </form>
    )
}

export default RegistrationForm