import React, { useState } from 'react';
import Select from 'react-select';
import './styles.css';

const InputWithImageButtonAndDropdown = ({ options, onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onOptionChange(selected);
  };

  return (
    <div className="input-with-image-button-dropdown">
      <button className="image-button">
        <img src={selectedOption.icon} alt={selectedOption.label} />
      </button>
      <Select
        className="dropdown"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
      />
    </div>
  );
};

export default InputWithImageButtonAndDropdown;

