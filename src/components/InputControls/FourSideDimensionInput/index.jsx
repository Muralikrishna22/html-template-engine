import React from 'react';
import './styles.css';

const FourSideDimensionInput = ({ value, dimen='px', onChange }) => {
  const handleChange = (side, newValue) => {
    const updatedValues = { ...value, [side]: newValue };
    const combinedValue = `${updatedValues.top}${dimen} ${updatedValues.right}${dimen} ${updatedValues.bottom}${dimen} ${updatedValues.left}${dimen}`;
    onChange(combinedValue.trim());
  }

  return (
    <div className="four-side-container">
      {['top', 'right', 'bottom', 'left'].map((side) => (
        <div key={side} className="side-input-container">
          <label>{side.charAt(0).toUpperCase() + side.slice(1)}</label>
          <input
            type="number"
            value={value?.[side]}
            onChange={(e) => handleChange(side, e.target.value)}
          />
        </div>
      ))}
    </div>
  )
}

export default FourSideDimensionInput;
