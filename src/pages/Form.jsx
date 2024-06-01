import React, { useState } from 'react';
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';
import axios from 'axios';

import '../global.css'

const Form = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    const value = input === 'acceptTermsAndCondition' ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [input]: value });
  };

  const handleSubmit = () => {
    const { acceptTermsAndCondition, ...dataToSubmit } = formValues;


    console.log("ljdfllll", dataToSubmit)

    axios.post('https://codebuddy.review/submit', dataToSubmit)
      .then(response => {
        console.log(response.data);
        window.location.href = "/posts";
      })
      .catch(error => {
        console.error("errr",error);
      });
  };

  const stepProps = {
    nextStep,
    prevStep,
    handleChange,
    values: formValues
  };

  return (
    <div className="form-container">
      <nav className="form-navigation">
        <button onClick={() => setStep(1)} className={step === 1 ? 'active' : ''}>Form 1</button>
        <button onClick={() => setStep(2)} className={step === 2 ? 'active' : ''}>Form 2</button>
        <button onClick={() => setStep(3)} className={step === 3 ? 'active' : ''}>Form 3</button>
      </nav>
      <div className="form-content">
        {step === 1 && <Form1 {...stepProps} />}
        {step === 2 && <Form2 {...stepProps} />}
        {step === 3 && <Form3 {...stepProps} handleSubmit={handleSubmit} />}
      </div>
    </div>
  );

};

export default Form;
