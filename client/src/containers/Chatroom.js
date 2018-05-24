import React, { Component, Fragment } from 'react';
import moment from 'moment';

import TextInput from 'components/TextInput';
import SendButton from 'components/Button';
import Header from 'components/Header';
import Username from 'components/Username';

import styles from './Chatroom.module.css';

export default class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment().calendar(),
      name: 'Tom',
    };

    this.handleSubmitName = name => {
      this.setState({ name });
    };

    this.handleInputChange = event => {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
      });
    };
  }
  render() {
    const { name } = this.state;
    return (
      <Fragment>
        <div className={styles.headerContainer}>
          <Header text="Chatroom" />
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.messageContainer}>
            <Username name={name} styleName="chatUser" />
            <p className={styles.timeStamp}>{this.state.time}</p>
            <p className={styles.message}>
              vdfasvojidfvjoidfjsbvjvjiogoisdfsvdfs gfi oidfsgdfisbvdfsnvbdfbgdfs vdsavdasvf das vdefdasfdasfvdfbd
              dfdsgfdsgfdgsd
            </p>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <TextInput styleName="messageInput" />
          <SendButton>Send</SendButton>
        </div>
      </Fragment>
    );
  }
}
