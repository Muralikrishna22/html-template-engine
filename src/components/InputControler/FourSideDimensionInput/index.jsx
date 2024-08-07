import React, { useEffect, useState } from 'react';
import './styles.css';

const FourSideDimensionInput = ({ singleDimensionValues, fieldDetails, formikFunctions }) => {
    const {
    values,
    setFieldValue,
  } = formikFunctions;
  const [inputValues, setInputValues] = useState({dimen: 'px'})

  const handleChange = (side, newValue) => {
    const updatedValues = { ...inputValues, [side]: newValue };
    let { dimen } = inputValues
    const combinedValue = `${updatedValues.top}${dimen} ${updatedValues.right}${dimen} ${updatedValues.bottom}${dimen} ${updatedValues.left}${dimen}`;
    setInputValues(updatedValues)
    setFieldValue(fieldDetails.property , combinedValue.trim())
  }

  useEffect(() => {
    ['top', 'right', 'bottom', 'left']?.forEach((side) => {
      setInputValues((prev) => ({...prev, [side]: singleDimensionValues.value, dimen: singleDimensionValues.dimen}))
    })
  },[singleDimensionValues])

  return (
    <div className="four-side-container">
      {['top', 'right', 'bottom', 'left'].map((side) => (
        <div key={side} className="side-input-container">
          <label>{side.charAt(0).toUpperCase() + side.slice(1)}</label>
          <input
            type="number"
            value={inputValues?.[side]}
            onChange={(e) => handleChange(side, e.target.value)}
          />
        </div>
      ))}
    </div>
  )
}

export default FourSideDimensionInput;
