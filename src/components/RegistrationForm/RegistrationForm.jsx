import React, { useEffect, useState } from 'react';
import DeliveryData from './DeliveryData';
import Finishing from './Finishing';
import UserData from './UserData';
import PersonalData from './PersonalData';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';

function RegistrationForm({ whenSend, validation }) {

    const [currentStep, setCurrentStep] = useState(0);
    const [dataCollected, setData] = useState({});
    
    useEffect(() => {
        if (currentStep === forms.length - 1) {
            whenSend(dataCollected)
        }
    })

    const forms = [
        <UserData whenSend={collectData} validation={validation}/>,
        <PersonalData whenSend={collectData} validation={validation} />,
        <DeliveryData whenSend={collectData} validation={validation}/>,
        <Finishing />,
    ];

    function collectData(data) {
        setData({ ...dataCollected, ...data });
        next();
        console.log(dataCollected)
    }

    function next() {
        setCurrentStep(currentStep + 1);
    }

    return <>
        <Stepper activeStep={currentStep}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Person</StepLabel></Step>
            <Step><StepLabel>Delivery</StepLabel></Step>
            <Step><StepLabel>Finish</StepLabel></Step>
        </Stepper>
        {forms[currentStep]}
    </>
}
export default RegistrationForm