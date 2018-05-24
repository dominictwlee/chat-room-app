import React, { Component, Fragment } from 'react';

import MessageInput from 'components/MessageInput';
import SendButton from 'components/SendButton';
import Header from 'components/Header';

import styles from './Chatroom.module.css';

export default class Chatroom extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.headerContainer}>
          <Header text="Chatroom" />
        </div>
        <div className={styles.inputContainer}>
          <MessageInput />
          <SendButton />
        </div>
      </Fragment>
    );
  }
}
