import React, { Component, Fragment } from 'react';
import moment from 'moment';

import MessageInput from 'components/MessageInput';
import SendButton from 'components/SendButton';
import Header from 'components/Header';
import Username from 'components/Username';

import styles from './Chatroom.module.css';

export default class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment().calendar(),
    };
  }
  render() {
    return (
      <Fragment>
        <div className={styles.headerContainer}>
          <Header text="Chatroom" />
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.messageContainer}>
            <Username name="Jason" styleName="chatUser" />
            <p className={styles.timeStamp}>{this.state.time}</p>
            <p className={styles.message}>
              vdfasvojidfvjoidfjsbvjvjiogoisdfsvdfs gfi oidfsgdfisbvdfsnvbdfbgdfs vdsavdasvf das vdefdasfdasfvdfbd
              dfdsgfdsgfdgsd
            </p>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <MessageInput />
          <SendButton />
        </div>
      </Fragment>
    );
  }
}
