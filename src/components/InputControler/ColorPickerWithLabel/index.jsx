import React, { useState } from 'react';
import './styles.css';

const ColorPickerWithLabel = ({ label, initialColor, onChange }) => {
  const [color, setColor] = useState(initialColor || '#000000');

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  return (
    <div className="color-picker-container">
      <label className="color-label" htmlFor="colorInput">
        {label}
      </label>
      <div className="color-display">
        <div 
          className="color-box" 
          style={{ backgroundColor: color }} 
          onClick={() => document.getElementById('colorInput').click()}
        />
      </div>
      <input
        id="colorInput"
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-input"
      />
    </div>
  );
};

export default ColorPickerWithLabel;
