import React, { Component } from 'react';

import UserList from 'containers/UserList';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <UserList />
      </div>
    );
  }
}

export default App;
