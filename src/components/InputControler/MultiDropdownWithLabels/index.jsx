import React, { useState } from 'react';
import InputWithImageButtonAndDropdown from '../InputWithImageButtonAndDropdown';
import './styles.css';


const MultiDropdownWithLabels = () => {
  const [firstInputValue, setFirstInputValue] = useState(null);
  const [secondInputValue, setSecondInputValue] = useState(null);
  const [thirdInputValue, setThirdInputValue] = useState(null);

  const handleFirstInputChange = (selectedOption) => {
    setFirstInputValue(selectedOption);
  };

  const handleSecondInputChange = (selectedOption) => {
    setSecondInputValue(selectedOption);
  };

  const handleThirdInputChange = (selectedOption) => {
    setThirdInputValue(selectedOption);
  };

  const firstInputOptions = [
    { value: 'top-left', label: 'Top Left', icon: 'topLeftIcon' },
    { value: 'top-right', label: 'Top Right', icon: 'topRightIcon' },
    { value: 'bottom-left', label: 'Bottom Left', icon: 'bottomLeftIcon' },
    { value: 'bottom-right', label: 'Bottom Right', icon: 'bottomRightIcon' },
  ];

  const secondInputOptions = [
    { value: 'top', label: 'Top', icon: 'topIcon' },
    { value: 'middle', label: 'Middle', icon: 'middleIcon' },
    { value: 'bottom', label: 'Bottom', icon: 'bottomIcon' },
  ];

  const thirdInputOptions = [
    { value: 'left', label: 'Left', icon: 'leftIcon' },
    { value: 'center', label: 'Center', icon: 'centerIcon' },
    { value: 'right', label: 'Right', icon: 'rightIcon' },
  ];

  return (
    <div className="multi-input-with-labels">
       <label className="input-label">Align Container</label>
      <div className="input-group">
        {/* <label className="input-label">Position (-Left, Top-Right, etc.)</label> */}
        <InputWithImageButtonAndDropdown 
          options={firstInputOptions} 
          onOptionChange={handleFirstInputChange} 
        />
      </div>
      <div className="input-group">
        {/* <label className="input-label">Vertical Alignment (Top, Middle, Bottom)</label> */}
        <InputWithImageButtonAndDropdown 
          options={secondInputOptions} 
          onOptionChange={handleSecondInputChange} 
        />
      </div>
      <div className="input-group">
        {/* <label className="input-label">Horizontal Alignment (Left, Center, Right)</label> */}
        <InputWithImageButtonAndDropdown 
          options={thirdInputOptions} 
          onOptionChange={handleThirdInputChange} 
        />
      </div>
    </div>
  );
};

export default MultiDropdownWithLabels;
