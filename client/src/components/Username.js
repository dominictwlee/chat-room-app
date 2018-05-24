import React from 'react';
import styles from './Username.module.css';

const Username = ({ name, styleName }) => {
  return <div className={styles[styleName]}>{name}</div>;
};

export default Username;
