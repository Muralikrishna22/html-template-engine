import React, { useState } from 'react';
import SingleDimensionInput from '../SingleDimensionInput'
import FourSideDimensionInput from '../FourSideDimensionInput';

const MultiDimensionInput = ({ fieldDetails, formikFunctions }) => {
  const [singleDimensionValues, setSingleDimensionValues] = useState('');

  const updateFourDimensions = (value, dimen) => {
    setSingleDimensionValues({value, dimen})
  }

  return (
    <div>
      <SingleDimensionInput
        fieldDetails={fieldDetails}
        formikFunctions={formikFunctions}
        onChange={updateFourDimensions}
      />
      <FourSideDimensionInput
        fieldDetails={fieldDetails}
        formikFunctions={formikFunctions}
        singleDimensionValues={singleDimensionValues}
      />
    </div>
  );
};

export default MultiDimensionInput;
