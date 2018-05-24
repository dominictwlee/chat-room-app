import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import UserList from 'containers/UserList';
import Chatroom from 'containers/Chatroom';

import styles from './App.module.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <UserList />
        <Chatroom />
      </div>
    );
  }
}

export default App;
