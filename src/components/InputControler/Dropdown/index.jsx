import React from 'react';
import Select from 'react-select';
import './styles.css';

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <Select
        className="dropdown-select"
        value={options.find(option => option.value === value)}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
