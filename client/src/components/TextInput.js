import React from 'react';

import styles from './TextInput.module.css';

const TextInput = ({ styleName }) => <input className={styles[styleName]} type="text" />;

export default TextInput;
