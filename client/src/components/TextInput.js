import React from 'react';

import styles from './TextInput.module.css';

const TextInput = ({ styleName, handleInputChange, username }) => (
  <input className={styles[styleName]} type="text" name="username" onChange={handleInputChange} value={username} />
);

export default TextInput;
