import React, { useState } from 'react';

const Textbox = ({ className, onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(className, value);
    console.log("This is the value in textbox: ",value)
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        style={{ width: '500px', padding: '5px', marginBottom: '0.5rem' }}
        className={className}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Textbox;