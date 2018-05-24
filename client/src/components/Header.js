import React from 'react';

import styles from './Header.module.css';

const Header = ({ text }) => <h1 className={styles.text}>{text}</h1>;

export default Header;
