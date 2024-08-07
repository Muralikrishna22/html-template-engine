import React from 'react';
import './styles.css';

const TextInputWithLabel = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="text-input-container">
      {label && <label className="text-input-label">{label}</label>}
      <input
        type="text"
        className="text-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInputWithLabel;
