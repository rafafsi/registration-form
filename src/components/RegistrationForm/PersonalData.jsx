import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import FormValidation from "../../contexts/FormValidation";
import useError from "../../hooks/useError";

function PersonalData({ whenSend }) {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotion, setPromotion] = useState(true);
    const [news, setNews] = useState(true);
    const validation = useContext(FormValidation)
    const [error, toValidFields, canISend] = useError(validation);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (canISend()) {
                    whenSend({ name, lastname, cpf, promotion, news })
                }
            }}>

            <TextField
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                onBlur={toValidFields}
                error={!error.name.valid}
                TextField={error.name.text}
                name="name"
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

                onBlur={toValidFields}
                name="cpf"
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
                Next
            </Button>
        </form>
    )
}

export default PersonalData