import React from 'react';
import { Formik, Form, Field } from 'formik';
import toolBarFields from '../../../constants/toolsBarFields';
import './styles.css'

function Toolbar({ element, onUpdateElementProps }) {
  if (!element) return null;

  const formikValues = getInitialValues();

  function getInitialValues() {
    const initialValues = {};

    // Set initial values for content fields
    toolBarFields[element.type]?.content_fields?.forEach((field) => {
      initialValues[field.property] = field.defaultValue || '';
    });

    // Set initial values for style fields
    toolBarFields[element.type]?.styles_fields?.forEach((field) => {
      initialValues[field.property] = field.defaultValue || '';
    });

    return initialValues;
  }

  return (
    <Formik
      initialValues={formikValues}
      validate={(values) => {
        let formValues = {values: {}, styles:{}}

        toolBarFields[element.type]?.content_fields?.forEach((obj) => {
          formValues.values[obj.property] = values[obj.property]
        })

        toolBarFields[element.type]?.styles_fields?.forEach((obj) => {
          formValues.styles[obj.property] = values[obj.property]
        })

        onUpdateElementProps(formValues); 
        return {}
      }}

      onSubmit={(values, { setSubmitting }) => {

        let formValues = {values: {}, styles:{}}

        toolBarFields[element.type]?.content_fields?.forEach((obj) => {
          formValues.values[obj.property] = values[obj.property]
        })

        toolBarFields[element.type]?.styles_fields?.forEach((obj) => {
          formValues.styles[obj.property] = values[obj.property]
        })

        onUpdateElementProps(formValues); // Pass the updated styles back to the parent component
        setSubmitting(false);
      }}
    >
      {(formikFunctions) => {
        const {
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        } = formikFunctions;

        return (
          <Form className="toolbar">
            <h3>{element.name} Properties/Styles</h3>

            {/* Content Fields */}
            {toolBarFields[element.type]?.content_fields?.map((field, index) => (
              <div key={index} className="form-group">
                <label>{field.label}:</label>
                <Field
                  type={field.field_type}
                  name={field.property}
                  value={values[field.property]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            ))}

          

            {/* Style Fields */}
            {toolBarFields[element.type]?.styles_fields?.map((field, index) => (
              <div key={index} className="form-group">
                <label>{field.label}:</label>
                <Field
                  type={field.field_type}
                  name={field.property}
                  value={values[field.property]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            ))}
            {/* <button type="submit">Update</button> */}
          </Form>
        );
      }}
    </Formik>
  );
}

export default Toolbar;
