import React, { useState } from 'react';
import SingleDimensionInput from '../SingleDimensionInput'
import FourSideDimensionInput from '../FourSideDimensionInput';

const MultiDimensionInput = () => {
  const [singleValue, setSingleValue] = useState('');
  const [fourSideValue, setFourSideValue] = useState('');

  return (
    <div>
      <SingleDimensionInput onChange={setSingleValue} />
      <FourSideDimensionInput onChange={setFourSideValue} />
    </div>
  );
};

export default MultiDimensionInput;
