import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form3 = ({ prevStep, handleChange, values, handleSubmit }) => {
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      countryCode: Yup.string().oneOf(['+91', '+1'], 'Invalid country code').required('Required'),
      phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Must be a 10 digit number').required('Required'),
      acceptTermsAndCondition: Yup.boolean().oneOf([true], 'Must accept terms and conditions').required('Required'),
    }),
    onSubmit: (values) => {
      handleSubmit();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label  class="required">Country Code</label>
        <select
          name="countryCode"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange('countryCode')(e);
          }}
          value={formik.values.countryCode}
        >
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {formik.errors.countryCode ? <div className="error">{formik.errors.countryCode}</div> : null}
      </div>
      <div>
        <label  class="required">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange('phoneNumber')(e);
          }}
          value={formik.values.phoneNumber}
        />
        {formik.errors.phoneNumber ? <div className="error">{formik.errors.phoneNumber}</div> : null}
      </div>
      <div>
        <label  class="required">
          <input
            type="checkbox"
            name="acceptTermsAndCondition"
            onChange={(e) => {
              formik.handleChange(e);
              handleChange('acceptTermsAndCondition')(e);
            }}
            checked={formik.values.acceptTermsAndCondition}
          />
          Accept Terms and Conditions
        </label>
        {formik.errors.acceptTermsAndCondition ? <div className="error">{formik.errors.acceptTermsAndCondition}</div> : null}
      </div>
      <div className="button-container">
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default Form3;
