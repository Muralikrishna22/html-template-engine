import React, { useState } from 'react';
import Select from 'react-select';
import './styles.css';

const SingleDimensionInput = ({ fieldDetails, formikFunctions, onChange }) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formikFunctions;

  const [number, setNumber] = useState('');
  const [unit, setUnit] = useState('px');

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    setFieldValue(fieldDetails.property , `${value}${unit}`);
    if(onChange){
      onChange(value, unit)
    }
  };

  const handleUnitChange = (selectedOption) => {
    setUnit(selectedOption.value);
    setFieldValue(fieldDetails.property, `${number}${selectedOption.value}`);
    if(onChange){
      onChange(number, selectedOption.value)
    }
  };

  const unitOptions = [
    { value: 'px', label: 'px' },
    { value: 'rem', label: 'rem' },
    { value: 'em', label: 'em' },
    { value: '%', label: '%' },
  ];

  return (
    <div className="input_with_dropdown">
      <label>{fieldDetails.label}</label>

      <div className='dimension-input-container'>
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
          className="dimension-input-number"
          placeholder="Enter value"
        />
        <Select
          options={unitOptions}
          value={unitOptions.find(option => option.value === unit)}
          onChange={handleUnitChange}
          className="dimension-input-select"
          classNamePrefix="dimension-select"
        />
      </div>
    </div>
  );
};

export default SingleDimensionInput;
