import React, { useEffect, useState } from 'react';
import './styles.css';

const FourSideDimensionInput = ({ singleDimensionValues, fieldDetails, formikFunctions }) => {
    const {
    values,
    setFieldValue,
  } = formikFunctions;

  const createValues = () => {
    let sides = ['top', 'right', 'bottom', 'left']
    let valuesObj = {dimen: 'px'}
    sides?.forEach((side, ind) => {
      let value = values[fieldDetails.property]?.split(' ')?.[ind] || values[fieldDetails.property]?.split(' ')?.[0]
      valuesObj[side] = !!value?.split('px')?.[0] ? parseInt(value?.split('px')?.[0]) : 0
    })
    return valuesObj
  }
  const [inputValues, setInputValues] = useState(createValues())


  useEffect(() => {
    if(values[fieldDetails.property]){
      setInputValues(createValues())
    }
  },[values[fieldDetails.property]])

  const handleChange = (side, newValue) => {
    const updatedValues = { ...inputValues, [side]: newValue };
    let { dimen = 'px' } = inputValues
    const combinedValue = `${updatedValues.top || 0}${dimen} ${updatedValues.right || 0}${dimen} ${updatedValues.bottom || 0}${dimen} ${updatedValues.left || 0}${dimen}`;
    // setInputValues(updatedValues)
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
            value={inputValues?.[side] || 0}
            onChange={(e) => handleChange(side, e.target.value)}
          />
        </div>
      ))}
    </div>
  )
}

export default FourSideDimensionInput;
