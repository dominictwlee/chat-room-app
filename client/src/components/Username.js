import React from 'react';
import styles from './Username.module.css';

const Username = ({ name, styleName }) => {
  return <h6 className={styles[styleName]}>{name}</h6>;
};

export default Username;
