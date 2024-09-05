import React from 'react';
import './styles.css';

const ColorPickerWithLabel = ({ fieldDetails, formikFunctions }) => {
  const { values, setFieldValue } = formikFunctions;
  const colour = values[fieldDetails.property] || '#000000';

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setFieldValue(fieldDetails.property, newColor);
  };

  return (
    <div className="color-picker-container">
      <label className="color-label" htmlFor={fieldDetails.property}>
        {fieldDetails?.label}
      </label>
      <div className="color-display">
        <div
          className="color-box"
          style={{ backgroundColor: colour }}
          onClick={() => document.getElementById(fieldDetails.property).click()}
        />
      </div>
      <input
        id={fieldDetails.property}
        type="color"
        value={colour}
        onChange={handleColorChange}
        className="color-input"
      />
    </div>
  );
};

export default ColorPickerWithLabel;
