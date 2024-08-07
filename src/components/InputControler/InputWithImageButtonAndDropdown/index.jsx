import React, { useState } from 'react';
import Select from 'react-select';
import './styles.css';

const InputWithImageButtonAndDropdown = ({fieldDetails, formikFunctions, options }) => {
  const {
    values,
    setFieldValue,
  } = formikFunctions;

  return (
    <div className="input-with-image-button-dropdown">
      <button className="image-button">
        <img src={values[fieldDetails.property]?.icon} alt={values[fieldDetails.property]?.label} />
      </button>
      <Select
        className="dropdown"
        value={values[fieldDetails.property]}
        onChange={(option) => setFieldValue(fieldDetails.property, option)}
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
      />
    </div>
  );
};

export default InputWithImageButtonAndDropdown;

