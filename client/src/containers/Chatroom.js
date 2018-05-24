import React, { Component, Fragment } from 'react';

import MessageInput from 'components/MessageInput';
import SendButton from 'components/SendButton';

import styles from './Chatroom.module.css';

export default class Chatroom extends Component {
  render() {
    return (
      <Fragment>
        <h1>Title</h1>
        <p>Body</p>
        <div className={styles.inputContainer}>
          <MessageInput />
          <SendButton />
        </div>
      </Fragment>
    );
  }
}
