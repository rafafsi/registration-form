function toValidCPF(cpf) {
    if (cpf.length !== 11) {
        return { valid: false, text: "CPF must have 11 digits" }
    } else {
        return { valid: true, text: "" }
    }
}

function toValidPassword(password) {
    if (password.length < 4 || password > 72) {
        return { valid: false, text: "Password must have between 4 and 72 digits" }
    } else {
        return { valid: true, text: "" }
    }
}

function toValidName(name) {
    if (name.length < 4 || name > 72) {
        return { valid: false, text: "Name may not be less than 4 letters" }
    } else {
        return { valid: true, text: "" }
    }
}

export { toValidCPF, toValidPassword, toValidName }