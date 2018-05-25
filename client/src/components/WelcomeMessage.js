import React from 'react';

import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ message, styleName }) => (
  <div className={styles[styleName]}>
    <h6>{message}</h6>
  </div>
);

export default WelcomeMessage;
