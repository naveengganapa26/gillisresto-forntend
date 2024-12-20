import React from 'react';
import '../../styles/inputbox-comp.scss'; 

const InputBox = ({ label, type = "text", name, value, onChange, error }) => {
  return (
    <div className="input-box">
      <label>
        {label}:
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default InputBox;
