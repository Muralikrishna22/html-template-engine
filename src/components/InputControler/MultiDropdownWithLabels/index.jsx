import React, { useState } from 'react';
import InputWithImageButtonAndDropdown from '../InputWithImageButtonAndDropdown';
import './styles.css';


const MultiDropdownWithLabels = ({fieldDetails, formikFunctions}) => {
  const {
    values,
    setFieldValue,
  } = formikFunctions;

  const firstInputOptions = fieldDetails.options?.[values['flex-direction']?.value]?.custom || []
  const secondInputOptions = fieldDetails.options?.[values['flex-direction']?.value]?.['space-evenly'] || []
  const thirdInputOptions = fieldDetails.options?.[values['flex-direction']?.value]?.['space-between'] || []

  return (
    <div className="multi-input-with-labels">
       <label className="input-label">Align Container</label>
      <div className="input-group">
        {/* <label className="input-label">Position (-Left, Top-Right, etc.)</label> */}
        <InputWithImageButtonAndDropdown
          options={firstInputOptions}
          fieldDetails={fieldDetails}
          formikFunctions={formikFunctions}
        />
      </div>
      <div className="input-group">
        {/* <label className="input-label">Vertical Alignment (Top, Middle, Bottom)</label> */}
        <InputWithImageButtonAndDropdown
          options={secondInputOptions}
          fieldDetails={fieldDetails}
          formikFunctions={formikFunctions}
        />
      </div>
      <div className="input-group">
        {/* <label className="input-label">Horizontal Alignment (Left, Center, Right)</label> */}
        <InputWithImageButtonAndDropdown
          options={thirdInputOptions}
          fieldDetails={fieldDetails}
          formikFunctions={formikFunctions}
        />
      </div>
    </div>
  );
};

export default MultiDropdownWithLabels;
