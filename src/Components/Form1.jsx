import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form1 = ({ nextStep, handleChange, values }) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      emailId: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .matches(/[A-Z].*[A-Z]/, 'Must contain 2 capital letters')
        .matches(/[a-z].*[a-z]/, 'Must contain 2 small letters')
        .matches(/[0-9].*[0-9]/, 'Must contain 2 numbers')
        .matches(/[^A-Za-z0-9].*[^A-Za-z0-9]/, 'Must contain 2 special characters')
        .required('Required'),
    }),
    // onSubmit
    onSubmit: (values) => {
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label class="required">Email ID</label>
        <input
          type="email"
          name="emailId"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange('emailId')(e);
          }}
          value={formik.values.emailId}
          required
        />
        {formik.errors.emailId ? <div className="error">{formik.errors.emailId}</div> : null}
      </div>
      <div>
        <label  class="required">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange('password')(e);
          }}
          value={formik.values.password}
        />
        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
      </div>
      <div className="button-container">
        <button type="button" disabled>Back</button>
        <button type="submit">Save</button>
        <button type="submit">Save and Next</button>
      </div>
    </form>
  );
};

export default Form1;
