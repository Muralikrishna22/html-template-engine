import React from 'react';
import './styles.css';

const InputWithButtonList = ({fieldDetails, formikFunctions}) => {
  const {
    values,
    setFieldValue,
  } = formikFunctions;

  return (
    <div className="input-with-button-list">
      <label className="input-label">{fieldDetails.label}</label>
      <div className="button-list">
        {fieldDetails?.options?.map((button) => (
          <div key={button.value} className="button-item" onClick={() => setFieldValue(fieldDetails.property, button.value)}>
            <div className="button-icon">
              <img src={button?.icon} alt={button.label} />
            </div>
            <span className="button-label">{button.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputWithButtonList;
