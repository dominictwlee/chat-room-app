import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './SendButton.module.css';

const SendButton = () => (
  <div>
    <Button className={styles.button}>Send</Button>
  </div>
);

export default SendButton;
