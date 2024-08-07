import React, { useState } from 'react';
import './styles.css';

const ColorPickerWithLabel = ({ fieldDetails, formikFunctions }) => {
  const [color, setColor] = useState('#000000');
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formikFunctions;

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    setFieldValue(fieldDetails.property , newColor);
  };

  return (
    <div className="color-picker-container">
      <label className="color-label" htmlFor={fieldDetails.property}>
        {fieldDetails?.label}
      </label>
      <div className="color-display">
        <div 
          className="color-box" 
          style={{ backgroundColor: color }} 
          onClick={() => document.getElementById(fieldDetails.property).click()}
        />
      </div>
      <input
        id={fieldDetails.property}
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-input"
      />
    </div>
  );
};

export default ColorPickerWithLabel;
