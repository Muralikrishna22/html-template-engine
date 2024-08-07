import React from 'react';
import Select from 'react-select';
import './styles.css';

const Dropdown = ({ fieldDetails, formikFunctions }) => {
  const {
    values,
    setFieldValue,
  } = formikFunctions;
  let options = fieldDetails.options || []
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{fieldDetails?.label}</label>
      <Select
        className="dropdown-select"
        value={options.find(option => option.label === (values[fieldDetails.property] || fieldDetails.defaultValue))}
        onChange={(option) => setFieldValue(fieldDetails.property, option.value)}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
