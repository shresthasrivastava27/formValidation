import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form2 = ({ nextStep, prevStep, handleChange, values }) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, 'Only alphabets are allowed')
        .min(2, 'Minimum 2 characters')
        .max(50, 'Maximum 50 characters')
        .required('Required'),
      lastName: Yup.string().matches(/^[A-Za-z]*$/, 'Only alphabets are allowed'),
      address: Yup.string().min(10, 'Minimum length 10').required('Required'),
    }),
    onSubmit: (values) => {
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label  class="required">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange('firstName')(e);
          }}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange('lastName')(e);
          }}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
      </div>
      <div>
        <label  class="required">Address</label>
        <input
          type="text"
          name="address"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange('address')(e);
          }}
          value={formik.values.address}
        />
        {formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
      </div>
      <div className="button-container">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Save</button>
        <button type="submit">Save and Next</button>
      </div>
    </form>
  );
};

export default Form2;
