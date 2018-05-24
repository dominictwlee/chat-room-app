import React from 'react';
import styles from './Username.module.css';

const Username = ({ name }) => {
  return <div className={styles.userContainer}>{name}</div>;
};

export default Username;
