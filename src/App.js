import React, { Component } from 'react';
import './App.css';

import 'fontsource-roboto'
import { Container, Typography } from '@material-ui/core'


import RegistrationForm from './components/RegistrationForm/RegistrationForm';

import { toValidCPF, toValidName, toValidPassword } from '../src/models/Registration'
import FormValidation from './contexts/FormValidation';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          component="h1">Registration Form
        </Typography>
        <FormValidation.Provider value={{ cpf: toValidCPF, password: toValidPassword, name: toValidName }}>
           <RegistrationForm whenSend={whenSending} />
        </FormValidation.Provider>
      </Container>
    );
  }
}

function whenSending(data) {
  console.log(data)
}

export default App;
