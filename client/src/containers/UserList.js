import React, { Component } from 'react';
import Username from 'components/Username';

import styles from './UserList.module.css';

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.listContainer}>
        <Username name="Tom" />
        <Username name="Tom" />
        <Username name="Tom" />
        <Username name="Tom" />
        <Username name="Tom" />
      </div>
    );
  }
}
