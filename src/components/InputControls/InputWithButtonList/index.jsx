import React from 'react';
import './styles.css';

const InputWithButtonList = ({ label, buttons, onButtonClick }) => {
  return (
    <div className="input-with-button-list">
      <label className="input-label">{label}</label>
      <div className="button-list">
        {buttons.map((button) => (
          <div key={button.value} className="button-item" onClick={() => onButtonClick(button.value)}>
            <div className="button-icon">
              <img src={button.icon} alt={button.label} />
            </div>
            <span className="button-label">{button.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputWithButtonList;
