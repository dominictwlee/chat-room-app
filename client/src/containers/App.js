import React, { Component } from 'react';

import UserList from 'containers/UserList';
import Chatroom from 'containers/Chatroom';

import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleUser = username => {
      this.setState({ name: username });
    };
  }
  render() {
    const { name } = this.state;
    return (
      <div className={styles.app}>
        <UserList handleUser={this.handleUser} />
        {name ? <Chatroom name={name} /> : null}
      </div>
    );
  }
}

export default App;
