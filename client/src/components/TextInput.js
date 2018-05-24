import React from 'react';

import styles from './TextInput.module.css';

const TextInput = ({ styleName, handleInputChange, inputName, handleInputMessage, inputValue }) => (
  <input className={styles[styleName]} type="text" name={inputName} onChange={handleInputChange} value={inputValue} />
);

export default TextInput;
