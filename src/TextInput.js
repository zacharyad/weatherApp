import React from 'react';

let TextInput = ({ label, placeholder }) => {
  return (
    <div>
      <label htmlFor={label}>{label[0].toUpperCase() + label.slice(1)}:</label>
      <input
        id={label}
        type="text"
        name={label}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default TextInput;
