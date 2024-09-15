import React, { useState } from 'react';
import InputWithImageButtonAndDropdown from '../InputWithImageButtonAndDropdown';
import './styles.css';
import InputWithButtonList from '../InputWithButtonList';


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
       {/* <label className="input-label">Align Container</label> */}
      <div className="input-group">
        <InputWithButtonList
          fieldDetails={{...fieldDetails, options: firstInputOptions, label: 'Position'}}
          formikFunctions={formikFunctions}
        />
      </div>
      <div className="input-group">
         <InputWithButtonList
          fieldDetails={{...fieldDetails, options: secondInputOptions, label: 'Space Evenly'}}
          formikFunctions={formikFunctions}
        />
      </div>
      <div className="input-group">
        <InputWithButtonList
          fieldDetails={{...fieldDetails, options: thirdInputOptions, label: 'Space Between'}}
          formikFunctions={formikFunctions}
        />
      </div>
    </div>
  );
};

export default MultiDropdownWithLabels;
