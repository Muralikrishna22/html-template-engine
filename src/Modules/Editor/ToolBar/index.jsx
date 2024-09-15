import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import toolBarFields from "../../../constants/toolsBarFields";
import "./styles.css";
import InputController from "../../../components/InputControler";
import inputTypes from "../../../constants/inputTypes";

function Toolbar({ element, onUpdateElementProps }) {
  if (!element) return null;
  let tabs = [
    {
      label: "styles",
      id: 1,
    },
    {
      label: "values",
      id: 2,
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  function getInitialValues() {
    return element.toolbarValues || {};
  }

  // console.log(getInitialValues())

  return (
    <Formik
      initialValues={getInitialValues()}
      enableReinitialize={true}
      validate={(values) => {
        let formValues = { values: {}, styles: {}, toolbarValues: values };

        toolBarFields[element.type]?.content_fields?.forEach((obj) => {
          formValues.values[obj.property] = values[obj.property];
        });

        toolBarFields[element.type]?.styles_fields?.forEach((obj) => {
          if (values[obj.property]?.style) {
            formValues.styles = {
              ...formValues.styles,
              ...values[obj.property]?.style,
            };
          } else {
            formValues.styles[obj.property] = values[obj.property];
          }
        });

        onUpdateElementProps(formValues);
        return {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        let formValues = { values: {}, styles: {} };

        toolBarFields[element.type]?.content_fields?.forEach((obj) => {
          formValues.values[obj.property] = values[obj.property];
        });

        toolBarFields[element.type]?.styles_fields?.forEach((obj) => {
          formValues.styles[obj.property] = values[obj.property];
        });

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
          <div className="toolbar">
            <div className="header">
              <h3>{element.name}</h3>
            </div>

            <div className="toolbar-tabs">
              {tabs.map((tab) => (
                <div
                  className={`tab ${tab.id === currentTab.id ? "active" : ""}`}
                  onClick={() => setCurrentTab(tab)}
                >
                  {" "}
                  {tab?.label}
                </div>
              ))}
            </div>

            <form>

              {/* Content Fields */}
              {currentTab?.id === 2 && (
                <>
                  {toolBarFields[element.type]?.content_fields?.map(
                    (field, index) => (
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
                    )
                  )}
                </>
              )}

              {/* Style Fields */}
              {currentTab?.id === 1 && (
                <>
                  {toolBarFields[element.type]?.styles_fields?.map(
                    (field, index) => {
                      return (
                        <div key={index} className="form-group">
                          <InputController
                            fieldDetails={field}
                            formikFunctions={formikFunctions}
                            element={element}
                          />
                        </div>
                      );
                    }
                  )}
                </>
              )}

            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default Toolbar;
