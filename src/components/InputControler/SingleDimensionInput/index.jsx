import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./styles.css";
import { unitOptions } from "../../../utils";

const SingleDimensionInput = ({ fieldDetails, formikFunctions, onChange,element }) => {
  const { values, handleChange, handleBlur, handleSubmit, setFieldValue } =
    formikFunctions;

  const getPredefinedValue = () => {
    let value = 0;
    let dimen = "px";
    if (values[fieldDetails.property]) {
      unitOptions?.forEach((obj) => {
        if (values[fieldDetails.property]?.includes(obj.value)) {
          value = values[fieldDetails.property]?.split(obj.value)[0];
          dimen = obj.value;
        }
      });
    }
    return [value, dimen];
  };

  const [number, setNumber] = useState(0);
  const [unit, setUnit] = useState("px");

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    setFieldValue(fieldDetails.property, `${value}${unit}`);
    if (onChange) {
      onChange(value, unit);
    }
  };

  const handleUnitChange = (selectedOption) => {
    setUnit(selectedOption.value);
    setFieldValue(fieldDetails.property, `${number}${selectedOption.value}`);
    if (onChange) {
      onChange(number, selectedOption.value);
    }
  };

  useEffect(() => {
    let predefinedValue = getPredefinedValue()
    setNumber(predefinedValue[0]);
    setUnit(predefinedValue[1]);
  }, [values[fieldDetails.property]]);

  return (
    <div className="input_with_dropdown">
      <label>{fieldDetails.label}</label>

      <div className="dimension-input-container">
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
          className="dimension-input-number"
          placeholder="Enter value"
        />
        <Select
          options={unitOptions}
          value={unitOptions.find((option) => option.value === unit)}
          onChange={handleUnitChange}
          className="dimension-input-select"
          classNamePrefix="dimension-select"
        />
      </div>
    </div>
  );
};

export default SingleDimensionInput;
