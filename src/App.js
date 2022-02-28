import React, { Component } from 'react';
import './App.css';

import 'fontsource-roboto'
import { Container, Typography } from '@material-ui/core'

import RegistrationForm from './components/RegistrationForm/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography 
          variant="h3"
          align="center"
          component="h1">Registration Form
        </Typography>
        <RegistrationForm whenSend={whenSendingForm} validCPF={toValidCPF}/>
      </Container>
    );
  }
}

function whenSendingForm(data) {
  console.log(data)
}

function toValidCPF(cpf){
  if(cpf.length !== 11){
    return {valid:false, text:"CPF must have 11 digits"}
  } else {
    return {valid:true, text:""}
  }
}

export default App;
